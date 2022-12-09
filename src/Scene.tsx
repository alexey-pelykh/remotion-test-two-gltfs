import {getVideoMetadata, VideoMetadata} from '@remotion/media-utils';
import {useGLTF} from '@react-three/drei';
import {ThreeCanvas} from '@remotion/three';
import React, {useEffect, useRef, useState} from 'react';
import {AbsoluteFill, useVideoConfig, Video} from 'remotion';
import {Gltf} from './Gltf';

const container: React.CSSProperties = {
	backgroundColor: 'white',
};

const videoStyle: React.CSSProperties = {
	position: 'absolute',
	opacity: 0,
};

export const Scene: React.FC<{
	videoSrc: string;
	baseScale: number;
}> = ({baseScale, videoSrc}) => {
	const {width, height} = useVideoConfig();

	useGLTF.preload([
		'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF-Binary/Duck.glb',
		'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Box/glTF-Binary/Box.glb',
	]);

	return (
		<AbsoluteFill style={container}>
			<ThreeCanvas width={width} height={height}>
				<Gltf
					url={
						'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF-Binary/Duck.glb'
					}
				/>
			{/* </ThreeCanvas>
			<ThreeCanvas width={width} height={height}> */}
				<Gltf
					url={
						'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Box/glTF-Binary/Box.glb'
					}
				/>
			</ThreeCanvas>
		</AbsoluteFill>
	);
};
