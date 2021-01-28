function languageFeatures() {
     //using constants
     const eyeColor = 'red';

    //use let instead of var
    // var myKey;
    let herKey;
    
    //rest parameters
    function myShoes(...allMyShoes) {
        allMyShoes.forEach(shoe => {
            console.log(shoe);
        });
    }
    
    console.log('REST PARAMETERS..........');
    myShoes('Vans','Trainers','Soccer Boots');

    function sendResults(day, ...allSubjectResults) {
        allSubjectResults.forEach(subjectMark => {
            console.log(subjectMark)
        });
    }

    sendResults('Monday', 50, 60, 70);

    //destructuring arrays
    let Phones = ['Samsung Galaxy Note 8', 'Samsung Galaxy Note 8+', 'Samsung Galaxy Note 9'];
    let [phone1, phone2, phone3] = Phones;

    console.log('\n');
    console.log('DESTRUCTURING ARRAYS.........');
    console.log(phone1,"\n",phone2,"\n",phone3);

    let newPhones = ['Iphone 6', 'Iphone 6+', 'Iphone 8'];
    let phone4, remainingPhones;
    [phone4, ...remainingPhones] = newPhones;
    
    console.log(phone4, ...remainingPhones);
    console.log(typeof(remainingPhones));

    let CarIds = [1, 2, 5];
    let car1, remainingCars;
    [car1, ...remainingCars] = CarIds;

    console.log(car1, remainingCars);
    console.log(typeof(remainingCars));

    [, ...remainingCars] = CarIds;
    console.log(remainingCars);

    console.log(typeof(CarIds));

    console.log('\n');
    console.log('DESTRUCTURING OBJECTS.........');
    let car = { id: 5000, style: 'convertible' };
    let { id, style } = car;

    console.log(id, style);

    console.log('\n');
    console.log('SPREAD SYNTAX.........');

    function startCars(car1, car2, car3) {
        console.log(car1, car2, car3);
    }

    let carIds = [100, 200, 300];
    startCars(...carIds);

    let carCodes = 'abc';
    startCars(...carCodes);

    console.log('\n');
    console.log('TYPEOF FUNCTION.........');
    console.log('1 is a', typeof(1));
    console.log('true is a', typeof(true));
    console.log('Hello is a', typeof('Hello'));
    console.log('function () {} is a', typeof( function () {} ));
    console.log('{} is an', typeof({}));
    console.log('null is an', typeof(null));
    console.log('undefined is', typeof(undefined));
    console.log('NaN is a', typeof(NaN));

    console.log('\n');
    console.log('TYPE CONVERSION.........');
    let foo = 5.5;

    //convert to string
    console.log(foo, 'has been converted to a', typeof(foo.toString()));

    //convert string to integer
    foo = '55';
    console.log('String', foo, 'has been converted to a', typeof(Number.parseInt(foo)));

    //convert string to float
    foo = '55.99';
    console.log('String', foo, 'has been converted to a', typeof(Number.parseFloat(foo)));

    //conditional operator
    console.log('\n');
    console.log('CONDITIONAL OPERATOR.........');
    let amount = (6000 < 5000) ? 'Do not sell the product' : 'Sell the product';
    console.log(amount);

    //Function Scope
    console.log('\n');
    console.log('FUNCTION SCOPE 1.........');
    function startCar(carId) {
        let message = 'Starting....';
    }

    startCar(123);

    //when the console.log(message) statement is uncommented, a RefrenceError will be thrown
    //console.log(message);
    console.log('This throws a Reference Error because variable message is out of scope');

    console.log('\n');
    console.log('FUNCTION SCOPE 2.........');
    function startCar2(carId) {
        let message = 'Starting ....'
        let startKey = function turnKey() {
            console.log(message);
        };
        
        startKey();
    }
    startCar2(123);
    console.log('This does not throw an Error because the variable message is in scope because it is defined in the parent function');

    console.log('\n');
    console.log('FUNCTION SCOPE 3.........');

    function startCar3(carId) {
        let message = 'Starting....';
        let startKey2 = function turnKey2() {
            let message = 'Override';
        }
        startKey2();
        console.log(message);
    }
    startCar3(123);
    console.log('No error is thrown but parent variable message overrides the inner message variable');

    //Block Scope
    console.log('\n');
    console.log('BLOCK SCOPE 1.........');
    if (5 === 5) {
        let message = "Equal";
    }

    //when the console.log(message) statement is uncommented, a RefrenceError will be thrown
    //console.log(message);
    console.log('This throws a reference error because the variable message is out of scope in the code block');

    console.log('\n');
    console.log('BLOCK SCOPE 2.........');
    let newMessage = 'Outside';
    if (5 === 5) {
        let newMessage = 'inside';
    }
    console.log(newMessage);
    console.log('This throws no error because the message in the code block lost scope but that outside the code block is still in scope');

     //IIFE
    console.log('\n');
    console.log('IIFE (Immediately Invoked Function Expression).........');
    let app = (function () {
        let carId = 123;
        console.log('in function');
        return { };
    })();

    //CLOSURES
    console.log('\n');
    console.log('CLOSURES.........');
    let app2 = (function () {
        let carId = 123;
        let getId = function () {
            return carId;
        }
        return {
            getId: getId
        };
    })();

    console.log(app2.getId());

    //"this" key word
    console.log('\n');
    console.log('THIS KEYWORD.........');

    let o = {
        carId: 123,
        getId: function () {
            console.log(this);
            return this.carId;
        }
    }
    console.log(o.getId());

    //"call function"
    console.log('\n');
    console.log('call() FUNCTION.........');

    let obj1 = {
        carId: 123,
        getId: function () {
            return this.carId;
        }
    }

    let newObj1 = {carId: 456};

    console.log(obj1.getId.call(newObj1));

    //"apply function"
    console.log('\n');
    console.log('apply() FUNCTION.........');

    let obj2 = {
        carId: 123,
        getId: function (prefix) {
            return prefix + this.carId;
        }
    }

    let newObj2 = {carId: 345};

    console.log(obj2.getId.apply(newObj2, ['ID: ']));

    //"bind function"
    console.log('\n');
    console.log('bind() FUNCTION.........');

    let obj3 = {
        carId: 123,
        getId: function () {
            return this.carId;
        }
    }

    let newObj3 = { carId: 456};

    let copyOfGetIdFunction = obj3.getId.bind(newObj3);
    console.log(copyOfGetIdFunction());
    
    //"arrow function"
    console.log('\n');
    console.log('ARROW FUNCTIONS.........');

    let getId1 = () => 123;
    console.log(getId1());

    let getId2 = prefix => prefix + 123;
    console.log(getId2('ID: '));

    let getId3 = (prefix, suffix) => prefix + 123 + suffix;
    console.log(getId3('ID: ', '!'));

    let getId4 = (prefix, suffix) => {
        return prefix + 123 + suffix; 
    }
    console.log(getId4('ID: ', '!'));

    let getId5 = _ => 123;
    console.log(getId5());

    //"Constructor function"
    console.log('\n');
    console.log('CONSTRUCTOR FUNCTIONS.........');

    function Car1() {
        console.log(this);
    }

    let vehicle1 = new Car1();

    function Car2(id) {
        this.carId = id;
        this.start = function () {
            console.log('start: ' + this.carId);
        }
    }
    let vehicle2 = new Car2(123);
    vehicle2.start();

    //"Prototypes"
    console.log('\n');
    console.log('PROTOTYPES.........');

    function Car3(id) {
        this.carId = id;
    }

    Car3.prototype.start = function () {
        console.log('start: ' + this.carId);
    };

    let newCar1 = new Car3(123);
    newCar1.start();

    //"Expanding objects with Prototypes"
    console.log('\n');
    console.log('EXPAND OBJECTS USING PROTOTYPES.........');
    String.prototype.hello = function () {
        return this.toString() + ' Hello';
    }

    console.log('foo'.hello());

    //"JSON - JavaScript Object Notation"
    console.log('\n');
    console.log('JSON.........');

    console.log('Converting a Javascript object to JSON');
    let car2 = {
        id: 123,
        style: 'convertible' 
    }

    console.log(JSON.stringify(car2));

    console.log('Converting an Array of objects to JSON');
    let carIds2 = [
        {carId: 123},
        {carId: 456},
        {carId: 789}
    ]
    console.log(JSON.stringify(carIds2));

    console.log('Parsing JSON - Converting a JSON to a Javascript object');
    let jsonIn = 
    `[
        {"carId": 123},
        {"carId": 456},
        {"carId": 789}
    ]`;

    console.log(JSON.parse(jsonIn));

    //"Array Iteration"
    console.log('\n');
    console.log('ARRAY ITERATION.........');

    console.log('Iterating through each element');
    let carIds3 = [
        {carId: 123, style: 'sedan'},
        {carId: 456, style: 'convertible'},
        {carId: 789, style: 'sedan'}
    ];

    carIds3.forEach(car => {
        console.log(car);
    });
    
    carIds3.forEach((car, index) => {
        console.log(car, index);
    });

    console.log('Filtering and Array');
    let carIds4 = [
        {carId: 123, style: 'sedan'},
        {carId: 456, style: 'convertible'},
        {carId: 789, style: 'sedan'}
    ];

    let convertibles = carIds4.filter(
        car => car.style === 'convertible'
    );

    console.log(convertibles);

    console.log('Testing an Array');
    let carIds5 = [
        {carId: 123, style: 'sedan'},
        {carId: 456, style: 'convertible'},
        {carId: 789, style: 'sedan'}
    ];

    let result = carIds5.every(
        car => car.carId > 0
    );

    console.log(result);

    console.log('Locating the first match in an Array');
    let carIds6 = [
        {carId: 123, style: 'sedan'},
        {carId: 456, style: 'convertible'},
        {carId: 789, style: 'sedan'}
    ];

    let firstCarMatch = carIds6.find(
        car => car.carId > 500
    );

    console.log(firstCarMatch);

    //"Classes and Modules"
    console.log('\n');
    console.log('CLASSES WITH CONSTRUCTOR, PROPERTIES AND METHODS.........');

    class Car5 {
        constructor (id) {
            this.id = id;
        }

        identify() {
            return `CarId: ${this.id}`;
        }
    }

    let car5 = new Car5(123);
    console.log(car5.id);
    car5.id = 456;
    console.log(car5.id);
    console.log(car5.identify());

    console.log('class inheritance.....................');

    class Vehicle {
        constructor() {
            this.type = 'car';
        }

        start() {
            return `Starting: ${this.type}`;
        }
    }

    class Car6 extends Vehicle {
        constructor () {
            super();
        }

        start() {
            return 'in Car start ' + super.start();
        }
    }

   let car7 = new Car6();
   console.log(car7.start());

   //"Timers"
   console.log('\n');
   console.log('TIMERS...............');

   console.log('setTimeout()...............');
   let timeOutId = setTimeout(() => {
       console.log('1 second passed')
   }, 1000);

   //cancel the setTimeout function
   clearTimeout(timeOutId);

   console.log('\n');
   console.log('setInterval()...............');
   let intervalId = setInterval(() => {
       console.log('1 second passed');
   }, 1000);

   //cancel the setInterval function
   clearInterval(intervalId);

    //Location
    console.log('\n');
    console.log('LOCATION...............');

    console.log(location.href);
    console.log(location.hostname);
    console.log(location.port);
    console.log(location.pathname);
    console.log(location.search);

    //Selecting DOM elements   
    console.log('\n');
    console.log('SELECT DOM ELEMENTS...............');

    let el = document.getElementById('first-paragraph');
    let els = document.getElementsByClassName('paragraph-two');
    let els2 = document.getElementsByTagName('p');

    console.log(el);
    console.log(els);
    console.log(els2);

    //Modifying DOM elements   
    console.log('\n');
    console.log('MODIFY DOM ELEMENTS...............');

    let el1 = document.getElementById('first-paragraph');

    el.textContent = 'This is the new content';
    el.setAttribute('name', 'para-one');
    el.classList.add('new-class-name');
    el.style.color = 'red';
    
    //Promises and Error Handling   
    console.log('\n');
    console.log('PROMISES AND ERROR HANDLING...............');

    console.log('try, catch, finally...............');
    try {
        let car8 = new Car;
    } catch (error) {
        console.log(error);
    }

    finally {
        console.log('this always executes');
    }
    
    console.log('Developer defined error...............');
    try {
        throw new Error('this is a custom error');
    } catch (error) {
        console.log(error);
    }
    finally {
        console.log('this always executes');
    }

    //Promises   
    console.log('\n');
    console.log('PROMISES...............');

    console.log('Creating a promise...............');
    let promise = new Promise (
        function (resolve, reject) {
            setTimeout(reject, 100, 'someValue');
        }
    )

    console.log(promise);

    console.log('Settling a promise...............');
    promise.then(
        value => console.log('fulfilled: ' + value),
        error => console.log('rejected: ' + error)
    )


    console.log('\n');
    console.log('DATA ACCESS...............');

    console.log('using XHR(XML HTTP REQUEST)...............');
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
        }
    }

    xhttp.open('GET', 'https://60112f8991905e0017be45dd.mockapi.io/api/v1/users', true);
    xhttp.send();

    console.log('using jQuery GET...............');
    console.log('import jquery into our js file......')
    let s = document.createElement("script");
    s.src = "/jquery.js";
    s.onload = function (e) {
        //use the normal jQuery approach
        $.get('https://60112f8991905e0017be45dd.mockapi.io/api/v1/users', 
            data => console.log('data: ', data)
        );

        //use promises to get the data
        let promise = $.get('https://60112f8991905e0017be45dd.mockapi.io/api/v1/users');

        promise.then(
            my_data => console.log("My data: ", my_data),
            error => console.log('Error', error)
        )

        //using jQuery POST
        console.log('using jQuery POST...............');
        let user = {
            name: "Albert Nuwagaba",
            avatar: "albert.jpg"
        };

        let promise1 = $.post('https://60112f8991905e0017be45dd.mockapi.io/api/v1/users', user);
        promise1.then(
            post_data => console.log('post_data: ', post_data),
            error => console.log('Error: ', error)
        )
    };
    document.head.appendChild(s);

    //Forms
    console.log('Prevent Default Form Submission...............');
    let form = document.getElementById('user-form');
    form.addEventListener('submit', event => {
        event.preventDefault();
        //get the data from the user fields
        let user = form.elements['user'];
        let avatarFile = form.elements['avatar-file'];

        //validating data
        let userError = document.getElementById('user-error');

        if (user.value.length < 5) {
            userError.textContent = 'Invalid Entry';
            userError.style.color = 'red';
            user.style.borderColor = 'red';
            user.focus();
        }
        
        //posting data from javascript
        let n_s = document.createElement('script');
        n_s.src = '/jquery.js';
        n_s.onload = function (e) {
            let posting = {
                user: user.value,
                avatarFile: avatarFile.value
            }

            let promise = $.post('https://60112f8991905e0017be45dd.mockapi.io/api/v1/users', posting);

            promise.then(
                data => console.log('success: ', data),
                error => console.log('error: ', error)
            )
        }
        document.head.appendChild(n_s);
    });
    
}

