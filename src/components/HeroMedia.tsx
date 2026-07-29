export function HeroMedia() {
  return (
    <>
      <div className="hero-background absolute inset-0" aria-hidden="true" />
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        controlsList="nodownload noplaybackrate noremoteplayback"
        aria-hidden="true"
        tabIndex={-1}
        className="absolute inset-0 size-full object-cover object-center motion-reduce:hidden"
      >
        <source src="/brand/integrolink-hero-video.mp4" type="video/mp4" />
      </video>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,17,31,0.08)_0%,rgba(8,17,31,0.02)_52%,rgba(8,17,31,0.3)_100%)] lg:bg-[linear-gradient(90deg,rgba(8,17,31,0.24)_0%,rgba(8,17,31,0.04)_55%,rgba(8,17,31,0.02)_100%)]"
      />
    </>
  );
}
