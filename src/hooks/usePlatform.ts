import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
    const { data: parent_platforms } = usePlatforms();
    return parent_platforms?.results.find(
      (p) => p.id === id );
} 

export default usePlatform;