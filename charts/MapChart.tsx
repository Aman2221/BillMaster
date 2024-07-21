// src/components/MapChart.tsx
import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Tooltip } from "react-tooltip";
import json from "@/json/map.json";

const MapChart: React.FC = () => {
  const [tooltipContent, setTooltipContent] = useState<string>("");

  return (
    <>
      <ComposableMap
        data-tooltip-id="map-tooltip"
        data-tooltip-content={tooltipContent}
      >
        <Geographies geography={json}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
                  const { NAME } = geo.properties;
                  setTooltipContent(NAME);
                }}
                onMouseLeave={() => {
                  setTooltipContent("");
                }}
                style={{
                  default: {
                    fill: "#1f2937",
                    outline: "none",
                  },
                  hover: {
                    fill: "#4b5563",
                    outline: "none",
                  },
                  pressed: {
                    fill: "gray",
                    outline: "  ",
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
      <Tooltip id="map-tooltip" />
    </>
  );
};

export default MapChart;
