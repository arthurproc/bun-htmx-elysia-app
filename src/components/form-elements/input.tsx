export default function Input(props: JSX.IntrinsicElements['input']) {
  return (
    <input
      {...props}
      className="w-full px-3 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-gray-500 focus:outline-none"
    />
  );
}