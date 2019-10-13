export default function generateId() {
  return `c${(~~(Math.random() * 1e8)).toString(16)}`;
}
