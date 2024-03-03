// Observer pattern implementation
class Subject {
    constructor() {
      this.observers = [];
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    removeObserver(observer) {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }
  
    notifyObservers(phoneNumber) {
      this.observers.forEach(observer => observer.update(phoneNumber));
    }
  }
  
  class Observer {
    update(phoneNumber) {
      // Abstract method to be implemented by concrete observers
    }
  }
  
  // Concrete observer that prints the phone number
  class PrintPhoneNumberObserver extends Observer {
    update(phoneNumber) {
      console.log("Phone number:", phoneNumber);
    }
  }
  
  // Concrete observer that prints a custom message
  class CustomObserver extends Observer {
    update(phoneNumber) {
      console.log("Now Dialling", phoneNumber);
    }
  }
  
  // Concrete subject - Telephone
  class Telephone extends Subject {
    constructor() {
      super();
      this.phoneNumbers = [];
    }
  
    addPhoneNumber(phoneNumber) {
      this.phoneNumbers.push(phoneNumber);
    }
  
    removePhoneNumber(phoneNumber) {
      const index = this.phoneNumbers.indexOf(phoneNumber);
      if (index !== -1) {
        this.phoneNumbers.splice(index, 1);
      }
    }
  
    dialPhoneNumber(phoneNumber) {
      if (this.phoneNumbers.includes(phoneNumber)) {
        console.log("Dialling", phoneNumber);
        this.notifyObservers(phoneNumber);
      } else {
        console.log("Phone number not found.");
      }
    }
  }