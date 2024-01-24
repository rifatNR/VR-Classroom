import { useEffect } from "react";
import * as THREE from "three";
import { Vector3 } from "three";
import SceneInit from "../../helper/core/SceneInit";
// import SceneInit from "../../helper/core/SceneInit-Working-Backup";
import { VRButton } from "three/addons/webxr/VRButton.js";
import { XRControllerModelFactory } from "three/addons/webxr/XRControllerModelFactory.js";
import { XRHandModelFactory } from "three/addons/webxr/XRHandModelFactory.js";
import { useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../../helper/firebase";
import { chairsData } from "../../helper/staticVars";
import {
    addBoard,
    addSpotLight,
    addTable,
    makeRoom,
} from "../../helper/Modelling/classroomCore";

function Classroom() {
    const [chairs, setChairs] = useState(chairsData);
    const [totalStudents, setTotalStudents] = useState(1);

    const addCube = (mainScene) => {
        const mesh = new THREE.Mesh(
            new THREE.BoxGeometry(0.1, 0.1, 0.1),
            new THREE.MeshNormalMaterial({ color: "#e65959" })
        );
        mesh.position.set(0, 0.1, 0);
        mesh.receiveShadow = true;
        mainScene.scene.add(mesh);

        const animate = () => {
            if (totalStudents == 5) {
                mesh.rotation.x += 0.01;
                mesh.rotation.y += 0.01;
            }
            window.requestAnimationFrame(animate);
        };
        animate();
    };

    useEffect(() => {
        const mainScene = new SceneInit("myThreeJsCanvas");

        // mainScene.initialize({ x: -3, y: 3, z: -3 });
        mainScene.initialize({ x: 0, y: 0.5, z: -1 });

        // mainScene.animate();

        mainScene.renderer.setAnimationLoop(() => {
            mainScene.renderer.render(mainScene.scene, mainScene.camera);
        });
        addCube(mainScene);

        makeRoom(mainScene);
        addBoard(mainScene);
        // chairs?.map((item) => {
        //     addTable(mainScene, item.position);
        // });
        [...Array(totalStudents).keys()]?.map((i) => {
            addTable(mainScene, chairs[i].position);
        });

        // addSpotLight(mainScene);

        // ! VR Stuffs
        document.body.appendChild(VRButton.createButton(mainScene.renderer));
    }, [totalStudents]);

    useEffect(() => {
        onValue(
            ref(db, "vr-classroom/session/my-code/total-students"),
            async (snapshot) => {
                const data = snapshot.val();
                console.log(data);
                setTotalStudents(data);
            }
        );
    }, []);

    return (
        <div>
            <canvas id="myThreeJsCanvas" />
        </div>
    );
}

export default Classroom;
