export const standardPrices = {
    "village" : {
      "room" : [
        {type : 'ราคาที่ดินที่ซื้อได้', price: 'ค่าที่ดินทั้งหมด', unit: 'บาท'},
        {type : 'ต้นทุนค่าก่อสร้างพื้นที่ใช้สอย', price: '10,000', unit: 'บาท/ตร.ม.'},
        {type : 'ค่าต่างๆ', price: '100,000', unit: 'บาท/1 หลัง'},
        {type : 'ค่าแบบ', price: '100,000', unit: 'บาท'},
      ]
    },
    "townhome" : {

    },
    "condo" : {
        "room" : [
            {name: 'Pool Villa', type: 'ห้องพัก', unit: 'บาท', price: 30000},
            {name: 'Jacuzzi Villa', type: 'ห้องพัก', unit: 'บาท', price: 30000},
            {name: 'Family Room', type: 'ห้องพัก', unit: 'บาท', price: 30000},
            {name: 'Super deluxe', type: 'ห้องพัก', unit: 'บาท', price: 30000},
            {name: 'Deluxe',  type: 'ห้องพัก', unit: 'บาท', price: 10000},
          ],
        "central" : [
            {name: 'Lobby', type: 'ส่วนกลาง', unit: 'บาท', price: 25000},
            {name: 'Pool',  type: 'ส่วนกลาง',unit: 'บาท', price: 25000},
            {name: 'BOH & Store', type: 'ส่วนกลาง', unit: 'บาท', price: 20000},
            {name: 'Restaurant', type: 'ส่วนกลาง', unit: 'บาท', price: 25000},
            {name: 'Spa', type: 'ส่วนกลาง', unit: 'บาท', price: 20000},
            {name: 'Gym',  type: 'ส่วนกลาง',unit: 'บาท', price: 15000},
            {name: 'Kitchen', type: 'ส่วนกลาง',unit: 'บาท', price: 15000},
            {name: 'Kid Club', type: 'ส่วนกลาง', unit: 'บาท', price: 10000},
            {name: 'Restroom', type: 'ส่วนกลาง', unit: 'บาท', price: 15000}
          ],
        "parking" : [
            {name: 'Carpark 1', type: 'ที่จอดรถ', unit: 'บาท', price: 15000},
            {name: 'Carpark 2', type: 'ที่จอดรถ', unit: 'บาท', price: 20000}          ],
        "outdoor" : [
            {name: 'Garden', type: 'พื้นที่ภายนอก', unit: 'บาท', price: 5000},
            {name: 'Entrance Gate', type: 'พื้นที่ภายนอก', unit: 'บาท', price: 1000000},
            {name: 'Entrance Fence', type: 'พื้นที่ภายนอก', unit: 'บาท', price: 5000}
          ],
          "specialEquipment"  : [
            {name: 'ค่าลิฟต์', type: 'costPerMonths', unit: 'บาท', price: 1000000},
            {name: 'ห้อง IT', type: 'costPerMonths', unit: 'บาท', price: 300000},
            {name: 'ค่ารถยนต์', type: 'costPerMonths', unit: 'บาท', price: 1000000},
            {name: 'ค่าออกแบบ', type: 'costPerMonths', unit: 'บาท', price: 1000000},
            {name: 'Restaurant', type: 'costPerMonths', unit: 'บาท', price: 300000},
            {name: 'ค่าอุปกรณ์ครัว', type: 'costPerMonths', unit: 'บาท', price: 300000},
            {name: 'ค่าอุปกรณ์ห้องพัก', type: 'costPerMonths', unit: 'บาท', price: 100000},
            {name: 'ค่าอุปกรณ์ส่วนต่าง ๆ', type: 'costPerMonths', unit: 'บาท', price: 50000},
            {name: 'Contingency', type: 'costPerMonths', unit: 'บาท', price: 1000000},
        ],
          "costPerMonths"  : [
            {name: 'ค่าการตลาด', type: 'specialEquipment', unit: 'บาท', price: 1000},
            {name: 'พนักงานทำความสะอาด', type: 'specialEquipment', unit: 'บาท', price: 15000},
            {name: 'พนักงานทั่วไป', type: 'specialEquipment', unit: 'บาท', price: 20000},
            {name: 'ค่าใช้จ่ายของผู้เข้าพัก', type: 'specialEquipment', unit: 'บาท', price: 300},
        ]
    },
    "hotel" : {
        "room" : [
            {name: 'Pool Villa', type: 'ห้องพัก', unit: 'บาท', price: 30000},
            {name: 'Jacuzzi Villa', type: 'ห้องพัก', unit: 'บาท', price: 30000},
            {name: 'Family Room', type: 'ห้องพัก', unit: 'บาท', price: 30000},
            {name: 'Super deluxe', type: 'ห้องพัก', unit: 'บาท', price: 30000},
            {name: 'Deluxe',  type: 'ห้องพัก', unit: 'บาท', price: 10000},
          ],
        "central" : [
            {name: 'Lobby', type: 'ส่วนกลาง', unit: 'บาท', price: 25000},
            {name: 'Pool',  type: 'ส่วนกลาง',unit: 'บาท', price: 25000},
            {name: 'BOH & Store', type: 'ส่วนกลาง', unit: 'บาท', price: 20000},
            {name: 'Restaurant', type: 'ส่วนกลาง', unit: 'บาท', price: 25000},
            {name: 'Spa', type: 'ส่วนกลาง', unit: 'บาท', price: 20000},
            {name: 'Gym',  type: 'ส่วนกลาง',unit: 'บาท', price: 15000},
            {name: 'Kitchen', type: 'ส่วนกลาง',unit: 'บาท', price: 15000},
            {name: 'Kid Club', type: 'ส่วนกลาง', unit: 'บาท', price: 10000},
            {name: 'Restroom', type: 'ส่วนกลาง', unit: 'บาท', price: 15000}
          ],
        "parking" : [
            {name: 'Carpark 1', type: 'ที่จอดรถ', unit: 'บาท', price: 15000},
            {name: 'Carpark 2', type: 'ที่จอดรถ', unit: 'บาท', price: 20000},
          ],
        "outdoor" : [
            {name: 'Garden', type: 'พื้นที่ภายนอก', unit: 'บาท', price: 5000},
            {name: 'Entrance Gate', type: 'พื้นที่ภายนอก', unit: 'บาท', price: 1000000},
            {name: 'Entrance Fence', type: 'พื้นที่ภายนอก', unit: 'บาท', price: 5000}
          ],
        "specialEquipment"  : [
          {name: 'ค่าลิฟต์', type: 'costPerMonths', unit: 'บาท', price: 1000000},
          {name: 'ห้อง IT', type: 'costPerMonths', unit: 'บาท', price: 300000},
          {name: 'ค่ารถยนต์', type: 'costPerMonths', unit: 'บาท', price: 1000000},
          {name: 'ค่าออกแบบ', type: 'costPerMonths', unit: 'บาท', price: 1000000},
          {name: 'Restaurant', type: 'costPerMonths', unit: 'บาท', price: 300000},
          {name: 'ค่าอุปกรณ์ครัว', type: 'costPerMonths', unit: 'บาท', price: 300000},
          {name: 'ค่าอุปกรณ์ห้องพัก', type: 'costPerMonths', unit: 'บาท', price: 100000},
          {name: 'ค่าอุปกรณ์ส่วนต่าง ๆ', type: 'costPerMonths', unit: 'บาท', price: 50000},
          {name: 'Contingency', type: 'costPerMonths', unit: 'บาท', price: 1000000},
      ],
        "costPerMonths"  : [
          {name: 'ค่าการตลาด', type: 'specialEquipment', unit: 'บาท', price: 1000},
          {name: 'พนักงานทำความสะอาด', type: 'specialEquipment', unit: 'บาท', price: 15000},
          {name: 'พนักงานทั่วไป', type: 'specialEquipment', unit: 'บาท', price: 20000},
          {name: 'ค่าใช้จ่ายของผู้เข้าพัก', type: 'specialEquipment', unit: 'บาท', price: 300},
      ]
    },
    "communityMall" : {
        "room" : [
            {name: 'Pool Villa', type: 'ห้องพัก', unit: 'บาท', price: 30000},
            {name: 'Jacuzzi Villa', type: 'ห้องพัก', unit: 'บาท', price: 30000},
            {name: 'Family Room', type: 'ห้องพัก', unit: 'บาท', price: 30000},
            {name: 'Super deluxe', type: 'ห้องพัก', unit: 'บาท', price: 30000},
            {name: 'Deluxe',  type: 'ห้องพัก', unit: 'บาท', price: 10000},
          ],
        "central" : [
            {name: 'Lobby', type: 'ส่วนกลาง', unit: 'บาท', price: 25000},
            {name: 'Pool',  type: 'ส่วนกลาง',unit: 'บาท', price: 25000},
            {name: 'BOH & Store', type: 'ส่วนกลาง', unit: 'บาท', price: 20000},
            {name: 'Restaurant', type: 'ส่วนกลาง', unit: 'บาท', price: 25000},
            {name: 'Spa', type: 'ส่วนกลาง', unit: 'บาท', price: 20000},
            {name: 'Gym',  type: 'ส่วนกลาง',unit: 'บาท', price: 15000},
            {name: 'Kitchen', type: 'ส่วนกลาง',unit: 'บาท', price: 15000},
            {name: 'Kid Club', type: 'ส่วนกลาง', unit: 'บาท', price: 10000},
            {name: 'Restroom', type: 'ส่วนกลาง', unit: 'บาท', price: 15000}
          ],
        "parking" : [
            {name: 'Carpark 1', type: 'ที่จอดรถ', unit: 'บาท', price: 15000},
            {name: 'Carpark 2', type: 'ที่จอดรถ', unit: 'บาท', price: 20000},
          ],
        "outdoor" : [
            {name: 'Garden', type: 'พื้นที่ภายนอก', unit: 'บาท', price: 5000},
            {name: 'Entrance Gate', type: 'พื้นที่ภายนอก', unit: 'บาท', price: 1000000},
            {name: 'Entrance Fence', type: 'พื้นที่ภายนอก', unit: 'บาท', price: 5000}
          ],
          "specialEquipment"  : [
            {name: 'ค่าลิฟต์', type: 'costPerMonths', unit: 'บาท', price: 1000000},
            {name: 'ห้อง IT', type: 'costPerMonths', unit: 'บาท', price: 300000},
            {name: 'ค่ารถยนต์', type: 'costPerMonths', unit: 'บาท', price: 1000000},
            {name: 'ค่าออกแบบ', type: 'costPerMonths', unit: 'บาท', price: 1000000},
            {name: 'Restaurant', type: 'costPerMonths', unit: 'บาท', price: 300000},
            {name: 'ค่าอุปกรณ์ครัว', type: 'costPerMonths', unit: 'บาท', price: 300000},
            {name: 'ค่าอุปกรณ์ห้องพัก', type: 'costPerMonths', unit: 'บาท', price: 100000},
            {name: 'ค่าอุปกรณ์ส่วนต่าง ๆ', type: 'costPerMonths', unit: 'บาท', price: 50000},
            {name: 'Contingency', type: 'costPerMonths', unit: 'บาท', price: 1000000},
        ],
          "costPerMonths"  : [
            {name: 'ค่าการตลาด', type: 'specialEquipment', unit: 'บาท', price: 1000},
            {name: 'พนักงานทำความสะอาด', type: 'specialEquipment', unit: 'บาท', price: 15000},
            {name: 'พนักงานทั่วไป', type: 'specialEquipment', unit: 'บาท', price: 20000},
            {name: 'ค่าใช้จ่ายของผู้เข้าพัก', type: 'specialEquipment', unit: 'บาท', price: 300},
        ]
    },
}
