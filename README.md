# Angular 

## Installation 
1. Install the angular cli to create new projects
`npm install -g @angular/cli`

## Create project 
2. To create a new workspace and initial starter app
`ng new app-name`

## Run the aplication 
3. The Angular CLI includes a server, so that you can easily build and serve the app locally.
`cd app-name`
`ng serve --open`


# Angular Course 
1. branch master
# master 
## contains the init of the proyect 
ng new [name] -->> to create a new project of angular 

2. branch components
# Components
## this contains a test component with a login form basic with css and html edit 
## property binding for the text of the button (login form) with a property created on the [export class TestComponent] instance 
ng g c [name] -->> to generate a new component with @angular/cli 
example: `ng g c test` -->> `ng generate component test`

3. branch interpolation 
# interpolation 
## this contains many proof of the capabilities of the interpolation on angular with explanation of each one
## all is in the test component, and deleted the previos html code (branch component)
## no @angular/cli commands used

4. branch property-binding 
# property binding
## we need know the difference of attribute and properties
### attribute -> are defined by the html 
### properties -> are defined by the DOM (document object model)
### attributes initialize the DOM properties and done, attributes can not change once they are initialized
### properties values however can change

## explanation of properties binding and comparation with interpolation and limitations if this 
## are in the test component with the previous html deleted

5. branch class-binding
# class-binding

## test the class binding and conditionals for show classes
## show how we can binding objects to a class for apply many classes and conditional classes
## ngClass directive

6. branch style-bindign
# style binding 
 
## test the style binding and conditionals with 
`(Condition)?(ifTrue):(ifFalse)` 
## ngStyle directive for apply many styles properties

7. branch event-binding
# event binding 

## test the diferent ways to event binding, and change properties using this 
## the component test has the methods

8. branch template-reference-variables
# template-reference-variables

## this works for have access to the values of different inputs
## how to access a DOM properties with de even binding -->> template reference variables

9. branch two-way-binding
# two-way-binding

## this is test to two way data binding--
## for use this we have to include the FormModule from @angular/forms on app.module.ts
## this method require the [(ngModel)] directive 

10. branch ngif-directive
# ngif-directive

## this and the 2 next contains the structural directive and examples to use 
## this contains 2 ways for use the ngIf directive with a toggle button to change the property display of the class
`*ngIf="display; else elseBlock"` on template <div,input,etc #thenBlock> and elseBlock on <ng-template #elseBlock>
`*ngIf="condition"; then thenBlock; else elseBlock` on <ng-template> each one 
<ng-template #thenBlock> and <ng-template #elseBlock>


11. branch ngswitch-directive
# ngswitch-directive

## this contains the way to use the ngSwitch directive with case an event binding and data binding
[ngSwitch]="variable" --> on <div,input,etc *ngSwitchCase="option"> and <div,inputm,etc *ngSwitchDefault>

12. branch ngfor-directive
# ngfor-directive

## this contains test of ngFor directive and examples of his key words like
[index][first][last][odd][even]
`*ngFor = "let element of array "`

13. branch component-interaction
# component-interaction

## the test.component is a child of app.component and they can send and receive data from the other 
## with the decorators 
[@Output()] and [@Input()]

to send data from the appComponent to the testComponent we can use the selector [selector:app-test] 
and send information like a attribute of tag <app-test [variableName]="variableValue">
finally in the test.component.ts we receive the data calling the instance of @angular/core Input
`@Input() public variableName` or `@Input('variableName') public otherName`

to send data from the testComponent to the appComponent we have to use the evenEmiter from rhe @angular/core
create a new instance of eventEmiter and previous use the decorator [@Output]
call the instance `eventEmiterName.emit('message')` from a method can be fire with button or whatever 
finally we can capture the event on the app.component.html in the tag <app-test (childEmiter)="message = $event">
and declare the variable "message" on the app.component.ts class. then we can interpolate to a html 

14. branch pipes
# pipes

## the pipes can change the format of the value only on the view 
## this contains many examples of pipe used to change the format of strings, numbers, dates, currency, percentage, 

15. branch services
# services -->> dependency Injection

## principles of reliability <-- cause this we use the services
[1][DRY] Do not repeat yourself
[2][] Single responsability principle

Service is a class with a specific purpose
1) Share data 
2) Implement application logic
3) External interaction

# dependency injection
ng g s [name] --> to generate a service in the @angular/cli
# in this case we use a service called employee
# in 2 components -> employee-list and employee-detail
## to use the service 
    1) Define the service [employee Service] class
    2) Register with injector
        in this case in the app.module.ts cause we want that every child of them could access to the data 
        import { EmployeeService } from './employee.service';
        providers:[EmployeeService]
    3)Declare as dependency in employee-list.components.ts and employee.detail.components.ts
## this contains the example to use the services in angular, we use 2 components an one service with a method
## that returns a array of employees, then render this data using the service in two cases, only name and all data [one of each component]

16. branch http-and-observables
# http and observables 

## to get information from API we need to use CORS, they can be configured on a client side and server side 
## normally this is configured on the server side
to configure in the client side we have to create a proxy to change the origin --> [https://www.youtube.com/watch?v=zq48aSVEwbQ] example
in this case the server runs in the localhost:3200 with express - we have to configure in this side
    this was solved adding a app.use with headers , but npm have a cors middleware

# this contains a test of module HTTP from @angular/common/http, in this case we make get petition across the service call employee.service.ts
# the service have a method call getEmployees that execute the get request to the api service, and return the data
# the service has a dependecy of interface employees 'employees.ts' and return the data with this format
# the data can be captured by the subscribed modules - in this case employee-list and employee-detail 

17. branch http-error-handling 
# http-error-handling
# this method don't work in this proyect but if want know how works follow this link 
[https://www.youtube.com/watch?v=TmTGQiLBS5A&list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ&index=22]
# this use to catch the error of request and show in the view of subscribed components

## correction -> angular change the method across 6 version, now use throwError catchError and pipes

### correction -> isn't necessary use a catch error, in the module that have subscribe we can catch the error as follow 
    this._employeeService.getEmployees()
      .subscribe(data => this.employeeList = data,
        error => this.errorMsg = error.message) 
# this works fine

`for the next proyects, the repository is proyect+ cause we need to create a aplication with a route module with ng new app --routing`

18. branch routing-and-navigation
# for this step we created a new proyect with the routing option in the proyect+ folder
pwd angular-course/
ng new proyect-plus --routing
# this contains a client on angular that uses HttpClientModule to create a get request and comunicated with a restApi on port 3200
# call 2 methods one of each component-- employees and departments, also each have himself service whos charge of manage the get request and 
# return the information, to see the information uses the routes estabilized on app-routing.module.ts each route call a diferent component
# 

19. branch wild-card-route
# the wild card is use to show a default component when the route isn't exists
# in this case shows <h1>PAGE NOT FOUND</h1>.
# calling the component with the same name ---->> see the app-routing.module.ts keep in mind the order

# the redirecting routes can see in the app-routing.module.ts top, works redirecting the 'index' to a component
# in this case when the request is '/' shows the departments

20. branch route-parameters
# generates a new component departmaent-details with 
`ng g c department-detils`

# in the app-routing.module.ts we created a path with the parameter /departments/:id
# to redirect to another component we need import the route module from @angular/route in the department-list
# and create a method when click the department pass him deparment object, and use the navigate method to redirect 
`this.router.navigate(['/departments', department.id])`  
# up to this point the redirect should be work find but we need the parameter id, so for this ...
# we need import ActivatedRoute from @angular/router and capture the id parameter like 
`let id = parseInt(this.route.snapshot.paramMap.get('id'))`
# then pass to a public property and interpolate to th view 

21. branch parammap-observable
# create a tag <a> for next and previuos and create method for each one,
# this methods should navigate so we need to import Router from @angular/router
# and update the id in the property departmentId-
(in the tutorial change the method for update the departmentId using Observable, the code is commented in the deparment-details.component.ts)

# created the same structure for the employees

22. branch optional-route-parameters

# this branch is focus on send back parameters to the departments and employees component 
# this for capture this info and show whos the last selected 

23. branch relative-navigation
# relative-navigation
# this uses for change the routes globally but isnt work in the best way in the test
# 

24. branch child-routes
# generated two components more -->> department-overview and department-contact
# whos are the childs of deparment details and only are accesed by this 
# modify the app-routing.module.ts adding the childs and create a button to call methods for use route.navigate and relative navigation 
# to redirect or show the component