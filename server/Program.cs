using CarsService;
using registrationService;

CarsService.CarsService server = new CarsService.CarsService("../cars.json");
server.Run();

var builder = Host.CreateApplicationBuilder(args);
builder.Services.AddHostedService<Worker>();

var host = builder.Build();
host.Run();

