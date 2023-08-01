varying vec2 vUV;

uniform vec2 resolution;

void main() {
  vUV = (position.xy * 2.0 - resolution.xy) / resolution.y;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1);
}