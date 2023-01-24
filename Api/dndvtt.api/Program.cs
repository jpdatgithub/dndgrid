using dndvtt.api.Facades;
using dndvtt.api.Facades.Interfaces;
using dndvtt.api.Models.Game;
using dndvtt.api.Hubs.Clients;
using dndvtt.api.Hubs;
using Microsoft.AspNetCore.SignalR;

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
builder.Services.AddScoped<Hub<ITtmClient>, TtmHub>();
builder.Services.AddScoped<IBoardFacade, BoardFacade>();
builder.Services.AddScoped<IChatFacade, ChatFacade>();
builder.Services.AddScoped<IBoardFacade, BoardFacade>();
builder.Services.AddScoped<IBoardFacade, BoardFacade>();
builder.Services.AddScoped<ITtmFacade, TtmFacade>();
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

app.MapHub<TtmHub>("/hubs/Ttm");

app.Run();