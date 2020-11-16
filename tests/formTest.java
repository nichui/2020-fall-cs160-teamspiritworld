
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.JavascriptExecutor;

public class Test  {
    public static void main(String[] args) {
        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);

        // And now use this to visit react Spirit World project
        driver.get("http://localhost:3000/Signin");

        // Find the text input element by its name
        WebElement element = driver.findElement(By.xpath("//*[@id='email']"));
        //String contents = (String)((JavascriptExecutor)driver).executeScript("return arguments[0].innerHTML;", element); 
        
        JavascriptExecutor js = (JavascriptExecutor) driver;         
        js.executeScript("return document.title");
        //String pageSource = driver.getPageSource();
        System.out.println("Script" + element.getText());
        //System.out.println("POO" + element);

        // Enter invalid input for email input in sign up / login field
        String invalid = "123456789";
        element.sendKeys(invalid);
        
        //assertEqual("Please include an '@' in the email address."  + invalid + " is missing an '@'.");

        String password = "testPass";
        WebElement pwd = driver.findElement(By.xpath("//*[@id='password']"));
        pwd.sendKeys(password);

        // wait for max 10 sec, and wait for error element defined bellow
        WebDriverWait wait = new WebDriverWait(driver, 10); 
        WebElement errorElement = wait.until(ExpectedConditions. presenceOfElementLocated(By.id("email")));
        // Now submit the form. WebDriver will find the form for us from the element
        element.submit();

        // check invalid input error
        Assert.assertTrue(element.isDisplayed(),"Please include an '@' in the email address."  + invalid + " is missing an '@'.");

        // Check the title of the page
        System.out.println("Title page: " + driver.getTitle());

        driver.quit();
    }
}