# TrackAndBuy
This script determines if your favorite stock is on its way to make a comeback, and minimize your loss after a BUY

Run the following commands in your terminal
```
git clone git@github.com:adityadevg/TrackAndBuy.git
cd TrackAndBuy
```
### Setup
#### Method 1: Using Docker
```
docker build -t TrackAndBuy .
```
#### Method 2: Without Docker
```
./setup.sh
```
### Run
#### Method 1: Using Docker
```
docker run -dp 3000:3000 TrackAndBuy <symbol>
```
#### Method 2: Without Docker
```
python main.py <symbol>
```
