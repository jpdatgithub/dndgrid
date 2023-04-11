using Microsoft.AspNetCore.SignalR;
using dndvtt.api.Services.Database.Interfaces;
using dndvtt.api.Services.Database;
using dndvtt.api.Services.Facades.Interfaces;
using dndvtt.api.Services.Facades;
using dndvtt.api.Services.Hubs.Clients;
using dndvtt.api.Services.Hubs;
using powerfantasy.api.Services.Facades;
using LiteDB;
using powerfantasy.api.Models.UserData;

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

var dbPath = Path.Combine(Directory.GetCurrentDirectory(), "Data", "database.db");

if (!File.Exists(dbPath))
{
    var db = new LiteDatabase(dbPath);
}

var connectionString = $"Filename={dbPath};Connection=shared";

builder.Services.AddScoped<ILiteDbConnector, LiteDbConnector>(_ => new LiteDbConnector(connectionString));

builder.Services.AddScoped<UsersFacade>();
builder.Services.AddScoped<IGameFacade, GameFacade>();
builder.Services.AddScoped<Hub<IGameClient>, GameHub>();
builder.Services.AddScoped<HubFacade>();

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

app.MapHub<GameHub>("/hubs/powerfantasy");

app.Run();