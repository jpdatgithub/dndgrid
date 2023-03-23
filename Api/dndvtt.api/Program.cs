using Microsoft.AspNetCore.SignalR;
using dndvtt.api.Services.Database.Interfaces;
using dndvtt.api.Services.Database;
using dndvtt.api.Services.Facades.Interfaces;
using dndvtt.api.Services.Facades;
using dndvtt.api.Services.Hubs.Clients;
using dndvtt.api.Services.Hubs;

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
builder.Services.AddScoped<IDBConnector, LiteDBConnector>();
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