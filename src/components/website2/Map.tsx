import React, { useEffect, useRef } from "react";
import { LuChurch } from "react-icons/lu";
import { RiRestaurant2Line } from "react-icons/ri";
import { renderToString } from "react-dom/server"; // Import renderToString

// Define the type for the google object
declare global {
  interface Window {
    google: typeof google;
  }
}

interface MapProps {
  ceremonyAddress: string;
  receptionAddress: string;
  ceremonyName: string;
  receptionName: string;
}

const Map: React.FC<MapProps> = ({
  ceremonyAddress,
  receptionAddress,
  ceremonyName,
  receptionName,
}) => {
  console.log("Map component rendered");
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("useEffect in Map.tsx", ceremonyAddress, receptionAddress);
    if (mapRef.current) {
      const google = window.google;
      console.log("window.google", google);
      if (google && google.maps) {
        console.log("google.maps is loaded");
        const geocoder = new google.maps.Geocoder();
        console.log("geocoder created", geocoder);

        const mapOptions: google.maps.MapOptions = {
          center: { lat: 0, lng: 0 },
          zoom: 10,
        };

        const map = new google.maps.Map(mapRef.current, mapOptions);
        console.log("map created", map);

        const addresses: {
          address: string;
          label: string;
          name: string;
          icon: string;
          infoWindowIcon: React.ReactNode;
        }[] = [
          {
            address: ceremonyAddress,
            label: "Ceremonia Ślubu",
            name: ceremonyName,
            icon: "/page2/wedding-ring.png",
            infoWindowIcon: <LuChurch size={30} color="#9966CC" />,
          },
          {
            address: receptionAddress,
            label: "Przyjęcie Weselne",
            name: receptionName,
            icon: "/page2/dinner-table.png",
            infoWindowIcon: <RiRestaurant2Line size={30} color="#9966CC" />,
          },
        ];

        const bounds = new google.maps.LatLngBounds();
        let ceremonyLocation: google.maps.LatLng | null = null;

        const createMarker = (
          location: google.maps.LatLng,
          label: string,
          name: string,
          icon: string,
          address: string,
          infoWindowIcon: React.ReactNode
        ) => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          if (!ctx) {
            console.error("Could not get 2D rendering context for canvas.");
            return;
          }
          canvas.width = 60;
          canvas.height = 60;

          ctx.beginPath();
          ctx.arc(30, 30, 30, 0, 2 * Math.PI);
          ctx.fillStyle = "#9966CC";
          ctx.fill();
          const img = new Image();
          img.src = icon;
          img.onload = () => {
            ctx.drawImage(img, 10, 10, 40, 40);

            const dataURL = canvas.toDataURL("image/png");

            const marker = new google.maps.Marker({
              map,
              position: location,
              title: label,
              icon: {
                url: dataURL,
                scaledSize: new google.maps.Size(60, 60),
              },
            });

            const iconString = renderToString(infoWindowIcon);

            const infoWindow = new google.maps.InfoWindow({
              content: `<div style="display: flex; flex-direction: column; align-items: center; gap: 5px;">
              <div style="display: flex; align-items: center; justify-content: center; width: 100%;">
                ${iconString}
              </div>
              <h3 style="text-align: center; margin-bottom: 5px;">${label}</h3>
              <p style="margin-bottom: 5px; text-align: center;">${name}</p>
              <p style="text-align: center;">${address}</p>
            </div>`,
            });

            marker.addListener("click", () => {
              infoWindow.open({
                anchor: marker,
                map,
              });
            });
          };
          img.onerror = () => {
            console.error("Failed to load icon:", icon);
          };
        };

        geocoder.geocode({ address: ceremonyAddress }, (results, status) => {
          if (status === "OK" && results && results[0]) {
            ceremonyLocation = results[0].geometry.location;
            bounds.extend(ceremonyLocation);
            createMarker(
              ceremonyLocation,
              "Ceremonia Ślubu",
              ceremonyName,
              "/page2/wedding-ring.png",
              ceremonyAddress,
              <LuChurch size={30} color="#9966CC" />
            );

            map.setCenter(ceremonyLocation);
            map.setZoom(13);

            geocoder.geocode(
              { address: receptionAddress },
              (results, status) => {
                if (status === "OK" && results && results[0]) {
                  const receptionLocation = results[0].geometry.location;
                  bounds.extend(receptionLocation);
                  createMarker(
                    receptionLocation,
                    "Przyjęcie Weselne",
                    receptionName,
                    "/page2/dinner-table.png",
                    receptionAddress,
                    <RiRestaurant2Line size={30} color="#9966CC" />
                  );
                } else {
                  console.error(
                    `Geocode was not successful for reception for the following reason:`,
                    status
                  );
                }
                map.fitBounds(bounds);
              }
            );
          } else {
            console.error(
              `Geocode was not successful for ceremony for the following reason:`,
              status
            );
          }
        });
      } else {
        console.error("Google Maps API not loaded.");
      }
    }
  }, [ceremonyAddress, receptionAddress, ceremonyName, receptionName]);

  return <div ref={mapRef} className="w-full h-[400px]" />;
};

export default Map;
