export const renderReviewCards = (r) => {
    return `
        <article class="bg-white rounded-xl p-4 flex flex-col gap-3 shadow">
            <p class="text-[#C8832B] text-sm tracking-widest" aria-label="${r.stars} out of 5 stars">
                ${"★".repeat(r.stars)}${"☆".repeat(5 - r.stars)}
            </p>
            <blockquote class="text-[#3B2A20] font-bold text-sm">“${r.review}”</blockquote>
            <small class="text-[#7A6A5E] text-xs">${r.name}</small>
        </article>
    `;
};