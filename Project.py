import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
from nltk.sentiment.vader import SentimentIntensityAnalyzer
# from wordcloud import WordCloud, STOPWORDS, ImageColorGenerator
import nltk
import re
import string
import plotly.express as px
from nltk.corpus import stopwords
nltk.download('vader_lexicon')
nltk.download('stopwords')
stemmer = nltk.SnowballStemmer("english")
stopword = set(stopwords.words('english'))
sentiments = SentimentIntensityAnalyzer()


def clean(text):
    text = str(text).lower()
    text = re.sub('\[.*?\]', '', text)
    text = re.sub('https?://\S+|www\.\S+', '', text)
    text = re.sub('<.*?>+', '', text)
    text = re.sub('[%s]' % re.escape(string.punctuation), '', text)
    text = re.sub('\n', '', text)
    text = re.sub('\w*\d\w*', '', text)
    text = [word for word in text.split(' ') if word not in stopword]
    text = " ".join(text)
    text = [stemmer.stem(word) for word in text.split(' ')]
    text = " ".join(text)
    return text


def sentiment_score(a, b, c):
    if (a > b) and ((c-a) <= 0.6):
        return "Positive 😊 "
    elif (b > a) and ((c-b) <= 0.6):
        return "Negative 😠 "
    else:
        return "Neutral 🙂 "


def analysis_review(name):
    data = pd.read_excel(f'./Scraped files/Scraped_{name}.xlsx')
    data_ama = data[['Company Name', 'Review', 'Rating']]
    data_ama["Review"] = data_ama["Review"].apply(clean)
    # Rating pie drawing
    ratings = data_ama['Rating'].value_counts()
    numbers = ['1 Rating','2 Rating','3 Rating','4 Rating','5 Rating']
    quantity = ratings.values
    figure = px.pie(data,
                    values=quantity,
                    names=numbers)
    figure.update_layout(paper_bgcolor="lightgreen", font={"color": "black"})
    # figure.show()
    figure.write_html(f"./Graph/graph_{name}.html")
    cleanedList = [x for x in list(set(data_ama['Rating'])) if str(x) != 'nan']
    data_dict = {'Ratings': cleanedList, 'No of persons': list(ratings)}
    data_ama_chart = pd.DataFrame(data_dict)
    figure = px.bar(data_ama_chart, x='Ratings',
                    y='No of persons', color_discrete_sequence=['Blue'])
    figure.update_layout(paper_bgcolor="lightgreen",
                         plot_bgcolor="red", font={"color": "black"})
    # figure.show()
    figure.write_html(f"./Chart/chart_{name}.html")

    # Sentiment analyser
    data_ama["Positive"] = [sentiments.polarity_scores(
        i)["pos"] for i in data_ama["Review"]]
    data_ama["Negative"] = [sentiments.polarity_scores(
        i)["neg"] for i in data_ama["Review"]]
    data_ama["Neutral"] = [sentiments.polarity_scores(
        i)["neu"] for i in data_ama["Review"]]
    data_ama['Analysis'] = "random"
    for i in range(data_ama.shape[0]):
        x = data_ama["Positive"][i]
        y = data_ama["Negative"][i]
        z = data_ama["Neutral"][i]
        data_ama['Analysis'][i] = sentiment_score(x, y, z)
        with pd.ExcelWriter(f"./Analysed Files/Scraped_{name}_analysed.xlsx",mode='a',if_sheet_exists="replace") as writer:
            data_ama.to_excel(writer,sheet_name='Sheet1',index=False)
    data = pd.read_excel(f'./Analysed files/Scraped_{name}_analysed.xlsx')
    data = data['Analysis']
    l1 = [i for i in data if i == "Positive 😊 "]
    l2 = [i for i in data if i == "Negative 😠 "]
    l3 = [i for i in data if i == "Neutral 🙂 "]
    quantity = [len(l1), len(l2), len(l3)]
    numbers = ['Positive', 'Negative', 'Neutral']
    figure = px.pie(data,
                    values=quantity,
                    names=numbers)
    figure.update_layout(paper_bgcolor="lightgreen",
                         font={"color": "black"})
    # figure.show()
    figure.write_html(f"./Graph2/graph2_{name}.html")
analysis_review("Amazon")
analysis_review("Flipkart")
analysis_review("Myntra")
analysis_review("Ajio")
analysis_review("Meesho")
analysis_review("Snapdeal")
