export default function CollectionCard(Collection) {
    const {collectionImage,name}=Collection;
  return (
    <div className="relative">
      <img
        src={collectionImage}
        alt="Collection 1"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0  flex items-center justify-center gap-2">
        <p className="text-white text-2xl capitalize">{name}</p>
      </div>
    </div>
  );
}
