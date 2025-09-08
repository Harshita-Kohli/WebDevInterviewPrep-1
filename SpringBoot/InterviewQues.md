## Soap vs Rest:
[Refer from AWS](https://aws.amazon.com/compare/the-difference-between-soap-rest/)

- In Spring Boot, REST and SOAP represent distinct approaches to building web services.
REST:
- REST is an architectural style that leverages HTTP methods and conventions, typically using JSON for data exchange, making it easier to implement and more lightweight compared to SOAP.
- RESTful services in Spring Boot are commonly created using the **@RestController annotation**, where controllers return data directly, often in JSON format, without requiring a separate view layer.
SOAP:
- SOAP, on the other hand, is a **protocol** that defines a strict message format based on XML, requiring a WSDL (Web Services Description Language) file to describe the service interface.
- In Spring Boot, SOAP services are typically built using Spring Web Services: **@WebService annotation**, which handles the sending and receiving of SOAP messages.
- SOAP is often used in enterprise environments where enhanced security, transaction support, and strict contract enforcement are required, such as in legacy banking systems.

## Principles of REST:

REST is a software architectural style that imposes six conditions on how an API should work. These are the six principles REST APIs follow:

- Client-server architecture. The sender and receiver are independent of each other regarding technology, platforming, programming language, and so on.
- Layered. The server can have several intermediaries that work together to complete client requests, but they are invisible to the client.
- Uniform interface. The API returns data in a standard format that is complete and fully useable.
- Stateless. The API completes every new request independently of previous requests.
- Cacheable. All API responses are cacheable.
- Code on demand. The API response can include a code snippet if required.
 
## Important Annotations in SpringBoot for Implementing Rest:
- [Refer GFG](https://www.geeksforgeeks.org/springboot/spring-boot-annotations/)

1. @Controller Annotation
This annotation provides Spring MVC features.
It is used to create Controller classes and simultaneously it handles the HTTP requests.
Generally we use @Controller annotation with @RequestMapping annotation to map HTTP requests with methods inside a controller class.

2.  @RestController = @Controller + @ResponseBody
3.  @RequestMapping Annotation
  - Maps HTTP requests to handler methods.
    ``@RestController
public class Geeks{
    @RequestMapping(value = "/welcome", method = RequestMethod.GET)
    public String welcome() {
        return "Welcome to Spring Boot!";
    }
4. @RequestBody Annotation: convert HTTP requests from request body from incoming JSON format to domain objects.
5.  @ResponseBody Annotation: This annotation is used to convert the domain object into HTTP response in the form of JSON or any other text.

## Advantages of SpringBoot:
- **Spring Boot is described as "opinionated"** because it makes automated decisions about the configuration and setup of an application based on the dependencies present in the project's classpath.
 This approach, known as "convention over configuration," reduces the need for manual setup by providing sensible default configurations that align with best practices.

## Disadvantages of Using Spring Boot:
- The main struggle for many developers when using Spring Boot is the lack of control over the system. The **opinionated style installs many extra dependencies** it assumes the system will need. 
By installing all these extra dependencies (which sometimes go unused), the deployment binary size can become very large in Spring Boot Applications
- Since the framework has been built to be agile and lightweight mainly focussing on APIs and micro services to be built using the framework, therefore **it should not be used for monolithic applications.**


What is a bean in Java?
A Java Bean is basically a simple Java class that:
- Has private fields (variables) → Data is kept safe.
- Provides public getters and setters → Other classes can access/modify the data in a controlled way.
- Has a no-argument (i.e. default constructor) constructor → Can be easily created by frameworks/tools.
- Implements Serializable (optional) → So it can be saved/transferred if needed.
👉 Think of it like a capsule: it holds data inside, and you use methods (getters/setters) to open it carefully.


🌿 What is a Bean in Spring (Spring Boot)?
- In Spring/Spring Boot, the word Bean has a special meaning.
- It doesn’t just mean the Java Bean class — **it means any Java object that is managed by the Spring IoC container.**
- The IoC container (Inversion of Control) is like a factory in Spring that **creates and manages objects (beans) for you.**
- You don’t create objects using new everywhere. Instead, you let Spring create and provide them whenever needed. This is how Dependency Injection (DI) works in Spring.

## Diff between ApplicationContext vs BeanFactory?
- 🏭 BeanFactory
 - It’s the basic container in Spring.
 - Responsible only for creating and managing beans.
 - It **lazily initializes beans** → beans are created only when you request them.
 - Think of it as the bare minimum factory — like a simple tea stall, just serving tea (beans).

 - 🏢 ApplicationContext
  - It is a superset of BeanFactory → provides all features of BeanFactory + many extra features.
  - Eager initialization by default → beans are created at startup (faster response later).
  - Provides extra enterprise-level features:
   - Event handling (publish/subscribe)
   - Internationalization (i18n)
   - Annotation-based configuration support
   - Easy integration with Spring Boot auto-config
    
 - Think of it as a big office cafeteria — not only tea (beans), but also snacks, AC, billing system, etc.

## What is the difference between IOCContainer and ApplicationCOntext?

```
IoC Container = the concept (any mechanism that manages beans and DI ie dependency injection).
ApplicationContext = the actual implementation of IoC container that Spring Boot uses by default.
```

🔑 First, what is an IoC Container?

**IoC = Inversion of Control. ---- IT IS A CONCEPT**
- It means instead of you creating objects (new MyService()), the framework (Spring) creates and injects them where needed.
- The IoC Container is the engine in Spring that is responsible for:
 - Creating beans
 - Wiring dependencies (Dependency Injection)
 - Managing bean lifecycle (init, destroy, scopes)

👉 Think of it like a factory manager: you just ask for what you need, and it provides the ready-made object.

⚡ Now, **what is ApplicationContext?**

**ApplicationContext is itself a type of IoC Container**.
- More specifically:
   The core IoC container is defined by the BeanFactory interface.
   ApplicationContext extends BeanFactory and adds enterprise-level features

| Aspect             | **IoC Container (BeanFactory)**                 | **ApplicationContext**                                                      |
| ------------------ | ----------------------------------------------- | --------------------------------------------------------------------------- |
| **Definition**     | Core container interface for managing beans     | Advanced IoC container (sub-interface of BeanFactory)                       |
| **Initialization** | Lazy by default (bean created on first request) | Eager by default (beans created at startup)                                 |
| **Features**       | Only basic bean creation & dependency injection | Adds enterprise features (events, i18n, profiles, annotation scanning, AOP) |
| **Spring Boot**    | Rarely used directly                            | Default container in Spring Boot                                            |
| **Use case**       | Lightweight apps, memory-constrained envs       | Almost always used in modern apps                                           |

## Where should we use ApplicationContext and where BeanFactory?

🚀 In Spring Boot
- You almost always use ApplicationContext.
- Spring Boot automatically creates an ApplicationContext for you when the app starts.
- In a Spring Boot app, the ApplicationContext is created automatically when your app starts.
- How can you access it?
  - When you start your Spring Boot app, SpringApplication.run() actually returns the ApplicationContext.

```
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class DemoApplication {
    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(DemoApplication.class, args); //returns applicationContext

        // Fetch bean manually
        MyService service = context.getBean(MyService.class);
        System.out.println(service.greet());
    }
}
```


## What is SpringIOC container?
- Factory manager that creates beans, helps in dependency injection etc.
- BeanFactory defines the core IOCcontainer, which is extended by the ApplicationContext.

## Did you face any circular dependency issues while coding? and How to get rid of it? 
- A circular dependency happens when two or more beans depend on each other, directly or indirectly.
- Spring tries to create Bean A → sees it needs Bean B → tries to create Bean B → but Bean B needs Bean A → deadlock!
- Eg: Here constructor injection fails due to circular dependency:
 ```
 @Component
public class A {
    private final B b;

    public A(B b) {
        this.b = b;
    }
}

@Component
public class B {
    private final A a;

    public B(A a) {
        this.a = a;
    }
}
```

### How to get rid:
1. **spring.main.allow-circular-references=true** in properties file if that is required
2. Use @Lazy annotation:
 ```
@Component
public class A {
    private final B b;

    public A(@Lazy B b) {   // Lazy injection breaks the cycle
        this.b = b;
    }
}

@Component
public class B {
    private final A a;

    public B(@Lazy A a) {
        this.a = a;
    }
}
```

## SpringDataJPARepository vs CrudRepository
How do you integrate logging in your application?
  - logback is default
  - log4j is added in place of logging:
    - 
What do we use for visualizing the logs? What tools have you used?
Explain Spring profiles
Diff between @Primary and @Qualifier Annotation
What kind of Authentication methods have you used? JWT or Cognito etc
What is JWT token made up of? When we decode: issuer, expiration time, etc
Howe do you call one service from another one in Microservice architecture?
  - Synchronous communication: HTTP methods
  - Asynchronous: Kafka/ messaging queue
    
Design patterns in microservice architecture?
What topics are you aware of in Java8? Share some new things added in java8
  - Lambda
  - Optional etc
Similarly for Java17

Stream vs Loop: Which is faster for iterating an array or list?
 - For/while


Intermediate and terminal operations in Stream?
What is a Functional Interface and its examples
- Eg: Comparator, lambda expression, Runnable, Callable are all functional interfaces

What is an Anonymous class?
What is an abstract class?

Default method vs Static Method in Interface?
What is Heap and Stack Memory in Java? What gets stored in Heap and what in Stack?
Which is faster out of heap and stack? As in what can be accessed faster?
Why strings in Java are immutable? What is the benefit?

In Collections framework in Java, in which scenario is Linked List preferred over ArrayList?
   - For retrieval of data --> prefer ArrayList
   - For adding data --> Prefer LinkedList

Which set would you use for preserving the order?
- LinkedHashSet

What are the different sets in Java?
What is hash Collision?
Why is it important to override the hashcode method when overriding equals()?

