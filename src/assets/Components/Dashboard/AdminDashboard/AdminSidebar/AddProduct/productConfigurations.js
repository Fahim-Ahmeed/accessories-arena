export const productConfigurations = {
    computerAccessory: {
      fields: [
        {name: 'name', type: 'text', label: 'Name', required: true },
        {name:'category',type:'select',label:'Category',options:['Mouse','keyboard','Monitor','Motherboard','RAM','SSD','HDD',"Laptop"],required:true},
        { name: 'brand', type: 'text', label: 'Brand', required: true },
        {name:'productType',type:'select',label:'Product Type',options:['Computer Accessory','Gaming Accessory','phone accessory','Phones']},
        { name: 'model', type: 'text', label: 'Model', required: true },
        { name: 'price', type: 'number', label: 'Price', required: true },
        { name: 'description', type: 'textarea', label: 'Description', required: true },
        { name: 'stockQuantity', type: 'number', label: 'Stock Quantity', required: true },
        { name: 'images', type: 'file', label: 'Images', multiple: true ,required:true},
        // Add other fields specific to computer products
      ]
    },
    gamingAccessory: {
      fields: [
        { name: 'name', type: 'text', label: 'Name', required: true },
        {name:'category',type:'select',label:'Category',options:['keyboard','mouse','headset'], required:true},
        { name: 'brand', type: 'text', label: 'Brand', required: true },
        {name:'productType',type:'select',label:'Product Type',options:['Computer Accessory','Gaming Accessory','phone accessory','Phones']},
        { name: 'price', type: 'number', label: 'Price', required: true },
        { name: 'description', type: 'textarea', label: 'Description', required: true },
        { name: 'stockQuantity', type: 'number', label: 'Stock Quantity', required: true },
        { name: 'images', type: 'file', label: 'Images', multiple: true , required:true},
        // Add other fields specific to gaming accessories
      ]
    },
    phoneAccessory: {
      fields: [
        { name: 'name', type: 'text', label: 'Name', required: true },
        {name:'category',type:'select',label:'Select Category',options:['Protector','Back cover','Charger','headphones'], required:true},
        { name: 'brand', type: 'text', label: 'Brand', required: true },
        {name:'productType',type:'select',label:'Product Type',options:['Computer Accessory','Gaming Accessory','phone accessory','Phones']},
        { name: 'price', type: 'number', label: 'Price', required: true },
        { name: 'description', type: 'textarea', label: 'Description', required: true },
        { name: 'stockQuantity', type: 'number', label: 'Stock Quantity', required: true },
        { name: 'images', type: 'file', label: 'Images', multiple: true, required:true },
      ]
    },
    phones: {
      fields: [
        { name: 'name', type: 'text', label: 'Name', required: true },
        { name: 'brand', label: 'Brand', type: 'select', options: ['Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi', 'Oppo', 'Vivo', 'Huawei', 'Nokia', 'Sony'], required:true },
        {name:'productType',type:'select',label:'Product Type',options:['Computer Accessory','Gaming Accessory','phone accessory','Phones']},
        { name: 'model', type: 'text', label: 'Model', required: true },
        { name: 'price', type: 'number', label: 'Price', required: true },
        { name: 'description', type: 'textarea', label: 'Description', required: true },
        { name: 'stockQuantity', type: 'number', label: 'Stock Quantity', required: true },
        { name: 'images', type: 'file', label: 'Images', multiple: true },
      ]
    }
  };
  