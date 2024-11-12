import React from "react";
import Layout from "../Header/Layout";
import Experience from "../components/Experience";
import { Canvas } from "@react-three/fiber";
import {
    MeshReflectorMaterial,
    OrbitControls,
    PresentationControls,
    Stage,
} from "@react-three/drei";
import Configurator from "../components/Configurator";
import { CustomizationContextProvider } from "../contexts/Customization";

const Home = () => {
    return (
        <>
            <div className="h-screen w-screen">
                <CustomizationContextProvider>
                    <Canvas>
                        <color attach="background" args={["#FDF5E6"]} />
                        <fog attach="fog" args={["#101010", 10, 20]} />

                        <Experience />
                    </Canvas>
                    <Configurator />
                </CustomizationContextProvider>
            </div>
        </>
    );
};

Home.layout = (page) => <Layout children={page} />;
export default Home;
