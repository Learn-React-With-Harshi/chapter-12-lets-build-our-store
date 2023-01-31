# `Learn React With Harshi` Series 
   Documenting my learning journey of [Namaste React Live Course](https://learn.namastedev.com/) conducted by Akshay Saini

## Coding Assignment: `Chapter-10 What is seen is sold` (28/01/2023)

## Build a Food Ordering App - Chapter-10 features

### Configure Tailwind and try to build your whole app using tailwind.

## <ans> Steps : </ans>

### 1. Install tailwindcss

Install tailwindcss via npm, and tailwind.config.js file will be created on executing init commonad.

```
npm install -D tailwindcss
npx tailwindcss init
```

### 2. Configure template paths 

Add the paths to all of your template files in your tailwind.config.js file.
```
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 3. Add the Tailwind directives to your CSS
Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.

@tailwind base;
@tailwind components;
@tailwind utilities;

### 4. Remove all the existing css classes from index.css 

Since we are going to use tailwind css, we can remove all the existing css that we kept writing all these chapters. It might be very painful to see all your efforts to write css these many days go nothing in seconds. But, thats the beauty of learning. Now, we can start making the app look like before using tailwind.

### 5. Start small, don't panic 

I initally had lot of hesitation to use tailwind css. What helped me going was to s