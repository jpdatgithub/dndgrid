using dndvtt.api.Facades;
using dndvtt.api.Hubs;
using dndvtt.api.Models.Game;

var ClientPermission = "_clientPermission";

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: ClientPermission, policy =>
    {
        policy.AllowAnyHeader()
            .AllowAnyMethod()
            .WithOrigins("http://localhost:3000")
            .AllowCredentials();
    });
});

builder.Services.AddSignalR();
builder.Services.AddControllers();
builder.Services.AddSingleton<IGameFacade>(options =>
{
    //get last state of the board here, meant to be get from a database but for now we'll use a dummie
    var boardModel = new BoardModel(16, 4);
    //configure the game facade here
    return new GameFacade();
});

// SWAGGER
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    //SWAGGER
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(ClientPermission);

app.UseRouting();

app.UseAuthorization();

app.MapControllers();

app.MapHub<ChatHub>("/hubs/chat");
app.MapHub<GameHub>("/hubs/game");

app.Run();