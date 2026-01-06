export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],



    extend: {
        keyframes: {
            bottomIn: {
                from: { transform: "translateY(250px)", opacity: "0" },
                to: { transform: "translateY(0)", opacity: "1" },
            },
            imgIn: {
                from: { transform: "translateY(250px) scale(0.8)", opacity: "0" },
                to: { transform: "translateY(0) scale(1)", opacity: "1" },
            },
        },
        animation: {
            bottomIn: "bottomIn 1.4s ease-in-out forwards",
            imgIn: "imgIn 1.4s ease-in-out forwards",
        },
    },


};