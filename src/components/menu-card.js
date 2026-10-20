export const renderMenuCards = (item) => {
    return `
        <article class="bg-white rounded-xl overflow-hidden shadow flex flex-col">
            <img src="${item.image}" alt="${item.name}" class=" w-full h-28 object-cover">
            <div class="p-3">
                <div class="flex justify-between mb-2">
                    <span class="text-lg font-bold text-[#2A1D16]">${item.name}</span>
                    <span class="text-lg font-bold text-[#C8832B]">$${item.price.toFixed(2)}</span>
                </div>
                <p class="text-[#7A6A5E] text-sm mb-2">${item.description}</p>
                <span class="text-[#2A1D16] bg-[#F0DFC6] border border-[#F0DFC6] rounded-full px-2 py-1 text-xs">${item.category}</span>
            </div>
        </article>
    `;
};