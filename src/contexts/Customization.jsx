import { createContext, useContext, useState } from "react";

export const cycleColors = [
    {
        color: "#683434",
        name: "brown",
    },
    {
        color: "#1a5e1a",
        name: "green",
    },
    {
        color: "#659994",
        name: "blue",
    },
    {
        color: "#896599",
        name: "mauve",
    },
    {
        color: "#ffa500",
        name: "orange",
    },
    {
        color: "#59555b",
        name: "grey",
    },
    {
        color: "#222222",
        name: "black",
    },
    {
        color: "#ececec",
        name: "white",
    },
];
export const cycleMaterials = [
    {
        name: 'Metal',
        material: 'metal',
        cycleProps: 'metalProps'
    },
    {
        name: 'Marble',
        material: 'marble',
        cycleProps: 'marbleProps'
    }
];

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
    const [material, setMaterial] = useState("metal");
    const [cycleColor, setCycleColor] = useState(cycleColors[0]);
    return (
        <CustomizationContext.Provider 
            value={{
                material, 
                setMaterial,
                cycleColor,
                cycleColors,
                setCycleColor,
                cycleMaterials
                }}>
            {props.children}
        </CustomizationContext.Provider>
    );
};

export const useCustomization = () => {
    const context = useContext(CustomizationContext);
    return context;
}