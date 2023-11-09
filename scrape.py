import requests
from bs4 import BeautifulSoup
import os
import pandas as pd
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

R_Name=[];Review=[];Rating=[]
URLS_shut=[];URLS=[]
n=input("Enter the name of company you want to scrape from mouthshut : ")
if n.lower()=="amazon":
    URL="https://www.mouthshut.com/product-reviews/Amazon-in-reviews-925670774"
elif n.lower()=="flipkart":
    URL = "https://www.mouthshut.com/product-reviews/Flipkart-com-reviews-925076148"
elif n.lower()=="snapdeal":
    URL = "https://www.mouthshut.com/product-reviews/Snapdeal-com-reviews-925602969"
elif n.lower()=="meesho":
    URL = "https://www.mouthshut.com/product-reviews/Meesho-reviews-925943816"
elif n.lower()=="myntra":
    URL = "https://www.mouthshut.com/product-reviews/Myntra-com-reviews-925076140"
elif n.lower()=="ajio":
    URL = "https://www.mouthshut.com/product-reviews/AJIO-com-reviews-925839312"
else:
    print("Enter correct name!!!")
URLS.append(URL)
data_old= pd.read_excel(f'./Scraped files/Scraped_{n}.xlsx',sheet_name="Sheet1",engine="openpyxl")
driver = webdriver.Chrome(executable_path=r'C:\webdriver\chromedriver.exe')
driver.get(URL)
driver.set_page_load_timeout(30)
driver.implicitly_wait(90)
WebDriverWait(driver, 10)
driver.set_script_timeout(30)
URLS_shut=driver.find_elements(By.CSS_SELECTOR,'a.btn.btn-link')
for url in URLS_shut:
    p=url.get_attribute('href')
    URLS.append(p)
URLS=set(URLS)
for i in URLS :
    if i !=URL and i!=None:
        driver.get(i)
        driver.set_page_load_timeout(30)
        driver.implicitly_wait(90)
        WebDriverWait(driver, 10)
        driver.set_script_timeout(30)
        review_divs = driver.find_elements(By.CSS_SELECTOR,'div.row.review-article')
        for element in review_divs:
            x=element.find_elements(By.CSS_SELECTOR,'div.user-ms-name')
            y=element.find_elements(By.CSS_SELECTOR,'div.more.reviewdata')
            z=element.find_elements(By.CSS_SELECTOR,'i.icon-rating.rated-star')
            q=len(z)
            Rating.append(q)
            for i in x:
                R_Name.append(i.text)
            for i in y:
                Review.append(i.text)
    elif i==URL:
        review_divs = driver.find_elements(By.CSS_SELECTOR,'div.row.review-article')
        for element in review_divs:
            x=element.find_elements(By.CSS_SELECTOR,'div.user-ms-name')
            y=element.find_elements(By.CSS_SELECTOR,'div.more.reviewdata')
            z=element.find_elements(By.CSS_SELECTOR,'i.icon-rating.rated-star')
            q=len(z)
            Rating.append(q)
            for i in x:
                R_Name.append(i.text)
            for i in y:
                Review.append(i.text)
data={
    'Company Name':n.lower(),
    'Reviewer Name':R_Name,
    'Review':Review,
    'Rating':Rating
}
df=pd.DataFrame(data)
df=pd.concat([df,data_old]).drop_duplicates(keep="first")
df.reset_index()
print(df)
#First Time
# with pd.ExcelWriter(f"./Scraped files/Scraped_{n}.xlsx",mode="a") as writer:
#     df.to_excel(writer,sheet_name='Sheet1',index=False)
with pd.ExcelWriter(f"./Scraped files/Scraped_{n}.xlsx",engine="openpyxl",mode='a',if_sheet_exists='replace') as writer:
    df.to_excel(writer,sheet_name='Sheet1',index=False)
# ,engine="openpyxl",mode='a',if_sheet_exists='replace'
# ,startrow=writer.sheets['Sheet1'].max_row,header=False