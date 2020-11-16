
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.JavascriptExecutor;

public class buttonNavBarTest {
    public static void main(String[] args) {
        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);

        // And now use this to visit react Spirit World project main page
          try {
              driver.get("http://localhost:3000/");

              // Get element with tag name 'div'
              //WebElement element = driver.findElement(By.tagName("div"));

              // Get all the elements available with tag name 'p'
              WebDriverWait wait = new WebDriverWait(driver, 30);
              wait.until(new ExpectedCondition<Boolean>() {
              @Override
                    public Boolean apply(WebDriver input) {
                        List<WebElement> elements =driver.findElements(By.className("nav-item"));  
                    }
              };
              // click the buttons on the nav bar
              for (WebElement e : elements) {
                  System.out.println(e.getText());
                  //click() should raise an exception if it fails
                  e.click();
              }
          } finally {
              System.out.println("Title page: " + driver.getTitle());
              driver.quit();
          }

    }
}