import { useCustomization } from "../contexts/Customization";

const Selector = () => {
    const {
        material,
        setMaterial,
        cycleColor,
        cycleColors,
        setCycleColor,
        cycleMaterials,
    } = useCustomization();

    return (
        <div className="selector">
            <div className="selector_section">
                <div className="selector_section_title">Cycle material</div>
                <div className="selector_section_values">
                    {cycleMaterials.map((item, index) => (
                        <div
                            key={index}
                            className={`item ${
                                item.material === material.material ? "item-active" : ""
                            }`}
                            onClick={() => setMaterial(item.material)}
                        >
                            <div className="item_label">{item.name}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="selector_section">
                <div className="selector_section_title">Cycle color</div>
                <div className="selector_section_values">
                    {cycleColors.map((item, index) => (
                        <div
                            key={index}
                            className={`item ${
                                item.color === cycleColor.color ? "item-active" : ""
                            }`}
                            onClick={() => setCycleColor(item)}
                        >
                        <div
                            className="item_dot"
                            style={{ backgroundColor: item.color }}
                        />
                        <div className="item_label">{item.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Selector;