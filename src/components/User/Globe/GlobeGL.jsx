import React  from 'react'
import Globe from 'react-globe.gl';
import GlobeJPF from "../../../assets/images/logos/earth.png"
export const GlobeGL = () => {
  const { useState, useEffect  ,useRef} = React;
    const [cablePaths, setCablePaths] = useState([]);
    const [countries, setCountries] = useState({ features: []});
    const globeEl = useRef();
  
    useEffect(() => {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.4;
     
      fetch('//raw.githubusercontent.com/telegeography/www.submarinecablemap.com/master/public/api/v2/cable/cable-geo.json')
        .then(r =>r.json())
        .then(cablesGeo => {
          let cablePaths = [];
          cablesGeo.features.forEach(({ geometry, properties }) => {
            geometry.coordinates.forEach(coords => cablePaths.push({ coords, properties }));
          });

          setCablePaths(cablePaths);
        });

        
    }, []);
  
    const N = 70;
    const arcsData = [...Array(N).keys()].map(() => ({
      startLat: (Math.random() - 0.5) * 160,
      startLng: (Math.random() - 0.5) * 360,
      endLat: (Math.random() - 0.5) * 180,
      endLng: (Math.random() - 0.5) * 360,
    
    }));
  
    const M = 420;
    const gData = [...Array(M).keys()].map(() => ({
      lat: (Math.random() - 0.5) * 480,
      lng: (Math.random() - 0.5) * 360,
      size: (Math.random() - 0.85) * 2,

    }));
    
    return (
        <div id="globeViz">
        <Globe
        ref={globeEl}
        height="950"
        width="1150"
        backgroundColor="#66000000"
        showGlobe={true}
        showAtmosphere={true}
        atmosphereColor={"green"}
        enablePointerInteraction={true}
      showAtmosphere={false}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      // globeImageUrl={GlobeJPF}
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      
      arcsData={arcsData}
      arcColor={path =>"#31cd00"}
      arcDashLength={() => Math.random()}
      arcDashGap={() => Math.random()}
      arcDashAnimateTime={() => Math.random() * 15000 + 500}
      arcCurveResolution={600}
      // backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      pathsData={cablePaths}
      pathPoints="coords"
      pathPointLat={p => p[1]}
      pathPointLng={p => p[0]}
      pathColor={path => "#31cd00"}
      pathLabel={path => path.properties.slug}
      pathDashLength={0.01}
      pathDashGap={0.03}
      pathDashAnimateTime={17000}
      animateIn={true}

      pointResolution={5}
      pointRadius={0.1}
      pointsData={gData}
      pointAltitude="size"
      pointColor={path =>"#4Dcd40"}
      pointsTransitionDuration={1000}
      pointsMerge={true}


    />
      
        </div>
    )
}
