const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path"); // NEW
const { randomUUID } = require("crypto");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;
const DIST_DIR = path.join(__dirname, "../dist"); // NEW
const HTML_FILE = path.join(DIST_DIR, "index.html"); // NEW

app.use(express.static(DIST_DIR)); // NEW


app.get("/cars", (req, res) => {
  const data = [
    {
      carId: 1,
      name: "Delivery from 4 weeks",
      otr: "50,830",
      wltp: "202 miles",
      wltp0verall: "273 miles",
      variant: "PREMIUM",
      imgUrl:
        "https://www.gpas-cache.ford.com/guid/2a4ba5a2-ddc3-3cab-a6a9-52fb419a56c7.jpg",
      price: 50830,
      features: "Ford SYNC4A with 15.5 Touchscreen, DAB Radio, Emergency Assistance, Wireless Car Play, Wireless Android Auto, 2 front and 2 rear USB ports and 6 Speakers, FordPass Connect, Connected Navigation Black Ony Full Sensico Trim with Grey Stitching Heated Front Seats and Steering Wheel Wireless Charging Pad Rear View Camera & 360 Degree Camera 18 5-Spoke Alloy Wheel LED Reflector Headlamps LED Mustang Signature Taillights Black Painted, Power Fold, Heated Mirrors With Puddle Light Mustang Logo Projection Rear Privacy Glass Quickclear Heated Windscreen 10.2 Digital Instrument Cluster Dual Zone Electronic Automated Temperature Contr(DEATC) Manual 6-way Driver Seat Adjust Manual 6-way Passenger Seat Adjust E-Latch Keyless Entry System (inc. B-Pillar Keypad Access) and Keyless Start Intelligent Adaptive Cruise Control with Stop & go and Lane Centring Front and Rear Parking Sensors BLIS with Cross Traffic Alert Lane Keeping Aid and Lane Departure Warning Pre Collision Assist including: Collision Mitigation, Forward Collision Warning, Dynamic Brake Support, Automated emergency Braking, Distance Alert/Distance Indication and Evasive Steer Assist Thatcham Category 1 Alarm "
    },
    {
      carId: 2,
      name: "Delivery from 4 weeks",
      otr: "50,000",
      wltp: "205 miles",
      wltp0verall: "283 miles",
      variant: "GT",
      imgUrl:"https://www.gpas-cache.ford.com/guid/b9a086c3-8638-3663-b6ea-99c16bcfced2.jpg",
      price: 50000,
      features: "Ford SYNC4A with 15.5 Touchscreen, DAB Radio, Emergency Assistance, Wireless Car Play, Wireless Android Auto, 2 front and 2 rear USB ports and 6 Speakers, FordPass Connect, Connected Navigation Black Perforated Full Sensico Trim with Red Stitching Heated Front Seats and Steering Wheel Wireless Charging PadRear  View Camera & 360 Degree Camera 19 Black Machined Alloy Wheels with Red Brake Calipers Adaptive LED Mustang Signature Headlamps LED Mustang Signature Taillights Black Painted, Power Fold, Heated Mirrors With Puddle Light Mustang Logo Projection Rear Privacy Glass Quickclear Heated Windscreen 10.2 Digital Instrument Cluster Dual Zone Electronic Automated Temperature Control (DEATC) 8-Way Power Driver Seat, with Lumbar Support 8-Way Power Passenger Seat, with Lumbar Support E-Latch Keyless Entry System (inc. B-Pillar Keypad Access) and Keyless Start Intelligent Adaptive Cruise Control with Stop & go and Lane Centring Front and Rear Parking Sensors BLIS with Cross Traffic Alert Lane Keeping Aid and Lane Departure Warning Pre Collision Assist including: Collision Mitigation, Forward Collision Warning, Dynamic Brake Support, Automated emergency Braking, Distance Alert/Distance Indication and Evasive Steer Assist Thatcham Category 1 AlarmFord SYNC4A with 15.5 Touchscreen, DAB Radio, Emergency Assistance, Wireless Car Play, Wireless Android Auto, 2 front and 2 rear USB ports and 6 Speakers, FordPass Connect, Connected Navigation  Black Perforated Full Sensico Trim with Red Stitching Heated Front Seats and Steering Wheel Wireless Charging Pad Rear View Camera & 360 Degree Camera 19 Black Machined Alloy Wheels with Red Brake Calipers Adaptive LED Mustang Signature Headlamps LED Mustang Signature Taillights Black Painted, Power Fold, Heated Mirrors With Puddle Light Mustang Projection Rear Privacy Glass Quickclear Heated Windscreen 10.2 Digital Instrument Cluster Dual Zone Electronic Automated Temperature Control (DEATC) 8-Way Power Driver Seat, with Lumbar Support 8-Way Power Passenger Seat, with Lumbar Support E-Latch Keyless Entry System (inc. B-Pillar Keypad Access) and Keyless Start Intelligent Adaptive Cruise Control with Stop & go and Lane Centring Front and Rear Parking Sensors BLIS with Cross Traffic Alert Lane Keeping Aid and Lane Departure Warning Pre Collision Assist including: Collision Mitigation, Forward Collision Warning, Dynamic Brake Support, Automated emergency Braking, Distance Alert/Distance Indicati Evasive Steer Assist"

    },
  ];
  res.send(data);
});

app.get("/engines/:carId", (req, res) => {
  const id = req.params.carId;

  const engineData1 = [
    {
      carId: id,
      engineId: randomUUID(),
      ENGINE: "RWD 70kWh (75kWh) Standard Range",
      "WLTP Extra High": "202 miles",
      "WLTP Overall Range": "273 miles",
      "Usable Battery Capacity": "70 kWh",
      "Performance 0-62 MPH": "6.9 secs‡",
      "Maximum Power": "198 kW / 269 PS",
      price: 5000,
      imgUrl:
        "https://www.gpas-cache.ford.com/guid/27fa4b32-1aaa-3560-8c6d-b3463a8129e2.jpg",
    },
  ];

  const engineData2 = [
    {
      carId: id,
      engineId: randomUUID(),
      ENGINE: "RWD 70kWh (75kWh) Standard Range",
      "WLTP Extra High": "202 miles",
      "WLTP Overall Range": "273 miles",
      "Usable Battery Capacity": "70 kWh",
      "Performance 0-62 MPH": "6.9 secs‡",
      "Maximum Power": "198 kW / 269 PS",
      price: 3000,
      imgUrl:
        "https://www.gpas-cache.ford.com/guid/27fa4b32-1aaa-3560-8c6d-b3463a8129e2.jpg",
    },
    {
      carId: id,
      engineId: randomUUID(),
      ENGINE: "RWD 50kWh (75kWh) Standard Range",
      "WLTP Extra High": "100 miles",
      "WLTP Overall Range": "100 miles",
      "Usable Battery Capacity": "50 kWh",
      "Performance 0-62 MPH": "6.9 secs‡",
      "Maximum Power": "198 kW / 269 PS",
      price: 6000,
      imgUrl:
        "https://www.gpas-cache.ford.com/guid/27fa4b32-1aaa-3560-8c6d-b3463a8129e2.jpg",
    },
  ];

  if (id == 1) {
    res.send(engineData1);
  } else {
    res.send(engineData2);
  }
});

app.get("/", (req, res) => {
  res.sendFile(HTML_FILE);
});
app.listen(port, function () {
  console.log("App listening on port: " + port);
});
