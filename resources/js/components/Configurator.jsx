import React from "react";
import { useCustomization } from "../contexts/Customization";

const Configurator = () => {
    const {
        material,
        setMaterial,
        legs,
        setLegs,
        chairColors,
        setChairColor,
        cushionColors,
        setCushionColor,
    } = useCustomization();

    const style =
        "item--active border-zinc-900 hover:bg-zinc-100 hover:text-zinc-700 hover:border-zinc-500";
    return (
        <div className=" fixed right-20 top-10 z-20 text-zinc-800 font-mono">
            <h1 className=" font-extrabold text-2xl ">CHAIR MATERIAL</h1>
            <div className="flex gap-3 text-base text-zinc-900 mb-3">
                <h1
                    className={`item border-2 p-2 border-zinc-100 border-solid rounded-lg  ${
                        material === "leather" ? style : ""
                    } cursor-pointer`}
                    onClick={() => setMaterial("leather")}
                >
                    Leather
                </h1>
                <h1
                    className={`item border-2 p-2 border-zinc-100 border-solid rounded-lg ${
                        material === "fabric" ? style : ""
                    } cursor-pointer`}
                    onClick={() => setMaterial("fabric")}
                >
                    Fabric
                </h1>
            </div>

            <h1 className=" font-extrabold text-2xl ">LEGS</h1>
            <div className="flex gap-3 text-base text-zinc-900 mb-3">
                <h1
                    className={`item border-2 p-2 border-zinc-100 border-solid rounded-lg  ${
                        legs === "classic" ? style : ""
                    } cursor-pointer`}
                    onClick={() => setLegs("classic")}
                >
                    Classic
                </h1>
                <h1
                    className={`item border-2 p-2 border-zinc-100 border-solid rounded-lg ${
                        legs === "modern" ? style : ""
                    } cursor-pointer`}
                    onClick={() => setLegs("modern")}
                >
                    Modern
                </h1>
            </div>

            <h1 className=" font-extrabold text-2xl ">CHAIR COLOR</h1>
            <div className="flex gap-3 text-base text-zinc-900 mb-4">
                {chairColors.map((item, index) => {
                    return (
                        <>
                            <div
                                className={`item grid grid-cols-4 relative border-2 p-6 border-zinc-100 border-solid rounded-lg ${
                                    item.color === chairColors.color
                                        ? "item--active"
                                        : ""
                                } cursor-pointer`}
                                onClick={() => setChairColor(item)}
                                style={{
                                    backgroundColor: item.color,
                                }}
                            >
                                <p className="absolute left-0 top-12">
                                    {" "}
                                    {item.name}
                                </p>
                            </div>
                        </>
                    );
                })}
            </div>
            <h1 className=" font-extrabold text-2xl ">CUSHION COLOR</h1>
            <div className="flex gap-3 text-base text-zinc-900">
                {cushionColors.map((item, index) => {
                    return (
                        <>
                            <div
                                className={`item relative border-2 p-6 border-zinc-100 border-solid rounded-lg ${
                                    item.color === cushionColors.color
                                        ? "item--active"
                                        : ""
                                } cursor-pointer`}
                                onClick={() => setCushionColor(item)}
                                style={{
                                    backgroundColor: item.color,
                                }}
                            >
                                <p className="absolute left-0 top-12">
                                    {" "}
                                    {item.name}
                                </p>
                            </div>
                        </>
                    );
                })}
            </div>
        </div>
    );
};

export default Configurator;
