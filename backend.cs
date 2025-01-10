using System;
using System.Web.Script.Serialization;
using System.DateTime;

namespace FullstackDemo;

class Car{
    public string name;
    public string make;
    protected DateTime expiry;
    public bool checkExpiry{

    }
}

class CarsService{
    protected List<Car> cars;
    
}