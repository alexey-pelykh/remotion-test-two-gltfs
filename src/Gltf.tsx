import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export const Gltf: React.FC<{
	url: string;
}> = ({url}) => {
  const gltf = useGLTF(url);
  const { scene } = useThree();

  return (
    <>
      <primitive object={gltf.scene} />
    </>
  );
}
