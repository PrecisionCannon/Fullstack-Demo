using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using registrationService;

FullstackDemo.CarsService server = new FullstackDemo.CarsService("../cars.json");
server.Run();

var builder = Host.CreateApplicationBuilder(args);
builder.Services.AddHostedService<Worker>();

var host = builder.Build();
host.Run();

namespace FullstackDemo{
    class Car{
        public string name{get;set;}
        public string make{get;set;}
        public DateTime expiry{get;set;}
        public Car(string name, string make, DateTime expiry){
            this.name = name;
            this.make = make;
            this.expiry = expiry;
        }
        public bool CheckExpiry(){
            DateTime now = DateTime.UtcNow;
            return DateTime.Compare(expiry, now) >= 0; 
        }
    }

    class CarsService{
        protected List<Car> _cars;
        public CarsService(string carsLocation){
            string carsJson = File.ReadAllText(carsLocation);
            _cars = JsonSerializer.Deserialize<List<Car>>(carsJson) ?? throw new Exception("Invalid cars JSON file");
        }
        public void Run(){
            var builder = WebApplication.CreateBuilder();
            builder.Services.AddCors(options => {
                options.AddDefaultPolicy(policy => {
                    policy.AllowAnyOrigin();
                });
            });
            var app = builder.Build();

            app.UseCors();
            app.MapGet("/api/listcars", ListCars);
            app.Run("http://localhost:1440");
        }
        private string ListCars(string make = ""){
            List<Car> tempCars = new List<Car>(_cars);
            if (make != ""){
                tempCars = tempCars.Where(car => car.make.Contains(make)).ToList();
            }

            return JsonSerializer.Serialize(tempCars);
        }
    }
}