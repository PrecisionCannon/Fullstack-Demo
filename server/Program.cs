using System;
using System.Text.Json;

namespace FullstackDemo;

class Car{
    public string _name;
    public string _make;
    protected DateTime _expiry;
    public Car(string name, string make, DateTime expiry){
        _name = name;
        _make = make;
        _expiry = expiry;
    }
    public bool CheckExpiry(){
        DateTime now = DateTime.Now;
        return DateTime.Compare(_expiry, now) >= 0; 
    }
}

class CarsService{
    protected List<Car> _cars;
    public CarsService(string carsLocation){
        string carsJson = File.ReadAllText(carsLocation);
        _cars = JsonSerializer.Deserialize<List<Car>>(carsJson) ?? throw new Exception("Invalid cars JSON file");
    }

}