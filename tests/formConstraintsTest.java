import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.JavascriptExecutor;

public class formConstraintsTest  {
    public static void main(String[] args) {
        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);

        // And now use this to visit react Spirit World project
        driver.get("http://localhost:3000/Signin");
        
        // Testing empty string inputs for both email and password
        // Find the text input element by its name
        WebElement element = driver.findElement(By.xpath("//*[@id='email']"));
        //String contents = (String)((JavascriptExecutor)driver).executeScript("return arguments[0].innerHTML;", element); 
        
        JavascriptExecutor js = (JavascriptExecutor) driver;         
        js.executeScript("return document.title");
        System.out.println("Script" + element.getText());

        // Enter invalid input for email input in sign up / login field
        String empty = "";
        element.sendKeys(empty);
        
        //assertEqual("Please include an '@' in the email address."  + invalid + " is missing an '@'.");

        WebElement pwd = driver.findElement(By.xpath("//*[@id='password']"));
        pwd.sendKeys(empty);

        // wait for max 10 sec, and wait for error element defined bellow
        WebDriverWait wait = new WebDriverWait(driver, 10); 
        WebElement errorElement = wait.until(ExpectedConditions. presenceOfElementLocated(By.id("email")));
        // Now submit the form. WebDriver will find the form for us from the element
        element.submit();

        // check invalid input error
        Assert.assertTrue(element.isDisplayed(),"Please include an '@' in the email address."  + empty + " is missing an '@'.");

        // Check the title of the page
        System.out.println("Title page: " + driver.getTitle());
        
        // Clear fields
        element.clear();
        pwd.clear();
        
        // Testing over 100 character inputs for both email and password
        String largeEmail = "234372429752ujtj3uhrifhsdfgdsgjdfgodsjej234372429752ujtj3uhrifhsdfgdsgjdfgodsjej12345@sjsu.edu";
        String largePass = "asdjflawrejdgljkngjkergfdjtijwirj2u34981j3kewlfksaufywe7yrfj32wf3wquru382rhu2erfsdjfskefjkeslfji2weuhf298y34";
        element.sendKeys(largeEmail);
        pwd.sendKeys(largePass);
        
        wait = new WebDriverWait(driver, 10); 
        errorElement = wait.until(ExpectedConditions. presenceOfElementLocated(By.id("email")));
        // Now submit the form. WebDriver will find the form for us from the element
        element.submit();

        // check invalid input error
        Assert.assertTrue(element.isDisplayed(),"Please include an '@' in the email address."  + empty + " is missing an '@'.");

        // Check the title of the page
        System.out.println("Title page: " + driver.getTitle());

        driver.quit();
    }
}