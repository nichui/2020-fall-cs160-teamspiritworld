from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from time import sleep

options = webdriver.ChromeOptions() 
options.add_argument("start-maximized")
options.add_experimental_option("excludeSwitches", ["enable-automation"])
options.add_experimental_option('useAutomationExtension', False)
driver = webdriver.Chrome()
driver.get("http://localhost:3000/Signin")
sleep(5)
for _ in range(100):
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
#print(html)
print(driver.page_source.encode("utf-8"))
driver.quit()