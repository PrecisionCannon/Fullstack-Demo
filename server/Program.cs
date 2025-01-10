using System;
using System.Web;

namespace FullstackDemo;

class Car{
    public Car(string name, string make, DateTime expiry){
        _name = name;
        _make = make;
        _expiry = expiry;
    }
    public string _name;
    public string _make;
    protected DateTime _expiry;
    public bool checkExpiry(){
        DateTime now = DateTime.Now;
        return DateTime.Compare(_expiry, now) >= 0; 
    }
}

class CarsService{
    protected List<Car> cars;

}