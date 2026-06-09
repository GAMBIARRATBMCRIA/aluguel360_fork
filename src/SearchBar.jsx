export function SearchBar({
    value,
    onChange,
    placeholder ="Digite cidade,bairro ou tipo de imóvel"
})  {
    return (
    <input
    type="text"
    value={value}
    onChange={(e)=>onChange (e.target.value)}
    placeholder="placeholder"
    className="w-full
    px-4
    py-3
    rounded-1g
    border
    border-gray-300
    text-gray-800
    focus:outline-nome
    focus:ring-2
    focus:ring-secondary"
     />
);

}
