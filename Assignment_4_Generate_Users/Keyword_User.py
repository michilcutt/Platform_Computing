import time
from selenium import webdriver

def findKeyword(driver, keyword)->bool:
    #print(driver.page_source.lower())
    return keyword.lower() in driver.page_source.lower()


def main():

    # Initialize browser
    driver = webdriver.Chrome()

    # Navigate to your website 
    driver.get("http://localhost:3000/")
    reward_time = 10
    total_reward_time  = 0
    keyword = "" #this helped with making the presence time 0
    for key in keyword:
        if findKeyword(driver, key):
            total_reward_time += reward_time
            time.sleep(reward_time)
      
    driver.quit()
    print("Presence Time:", total_reward_time)
    
if __name__ == "__main__":
    main()
