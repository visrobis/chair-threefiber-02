import {
    MeshReflectorMaterial,
    PresentationControls,
    Stage,
} from "@react-three/drei";
import React, { Suspense } from "react";
import { useLoader } from "@react-three/fiber";
import { Chair } from "./Chair";

const Experience = () => {
    return (
        <>
            <PresentationControls
                speed={1}
                global
                zoom={0.5}
                polar={[-0.1, Math.PI / 4]}
            >
                <Stage
                    environment={"city"}
                    intensity={0.6}
                    contactShadow={false}
                >
                    <Chair />
                </Stage>
                <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[10, 10]} />
                    <MeshReflectorMaterial
                        hasBlur={[300, 100]}
                        resolution={[2048]}
                        mixBlur={1}
                        mixStrength={40}
                        roughness={1}
                        depthScale={1}
                        minDepthThreshold={0.4}
                        maxDepthThreshold={1.4}
                        color="#101010"
                        metalness={0.5}
                    />
                </mesh>
            </PresentationControls>
        </>
    );
};

export default Experience;
