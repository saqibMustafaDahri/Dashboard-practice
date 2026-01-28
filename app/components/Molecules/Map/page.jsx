"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Box,
} from "@mui/material";
const INITIAL_CENTER = { lat: 34.0522, lng: -118.2437 };
const gradientButtonStyle = {
  background: "linear-gradient(60deg, lightblue 20%, black 70%, red 100%)",
  color: "white",
  padding: "8px 24px",
  textTransform: "none",
  borderRadius: "8px",
  fontWeight: "bold",
  "&:hover": {
    opacity: 0.9,
  },
};

export default function Contact() {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const mapRef = useRef(null);

  const loadGoogleMapsScript = () => {
    return new Promise((resolve, reject) => {
      if (window.google && window.google.maps) {
        resolve();
        return;
      }
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=marker`;
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    if (isMapOpen) {
      loadGoogleMapsScript().then(() => {
        setTimeout(initializeMap, 200);
      });
    }
  }, [isMapOpen]);

  const initializeMap = () => {
    if (!mapRef.current || !window.google) return;

    const center = selectedLocation || INITIAL_CENTER;
    const map = new google.maps.Map(mapRef.current, {
      zoom: 12,
      center,
    });

    const marker = new google.maps.Marker({
      position: center,
      map,
      draggable: false,
    });

    const updateLocation = (latLng) => {
      setSelectedLocation({
        lat: latLng.lat(),
        lng: latLng.lng(),
      });
    };

    map.addListener("click", (e) => {
      marker.setPosition(e.latLng);
      updateLocation(e.latLng);
    });

    updateLocation(new google.maps.LatLng(center.lat, center.lng));
  };

  return (
    <Box sx={{ p: 4 }}>
      <Box display="flex" justifyContent="center">
        <Button
          variant="contained"
          onClick={() => setIsMapOpen(true)}
          sx={gradientButtonStyle}
        >
          Map
        </Button>
      </Box>

      <Dialog
        open={isMapOpen}
        onClose={() => setIsMapOpen(false)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: { borderRadius: "12px", p: 1 },
        }}
      >
        <DialogTitle sx={{ fontWeight: "bold" }}>
          Click the Map to Select Location
        </DialogTitle>

        <DialogContent>
          <Box
            ref={mapRef}
            sx={{
              height: "50vh",
              width: "100%",
              border: "1px solid #ccc",
              borderRadius: "4px",
              mb: 2,
              mt: 1,
            }}
          />

          {selectedLocation && (
            <Typography variant="body2" color="textSecondary">
              Current Selection: Lat:{" "}
              <Box component="span" sx={{ fontWeight: "bold", color: "black" }}>
                {selectedLocation.lat.toFixed(6)}
              </Box>
              , Lng:{" "}
              <Box component="span" sx={{ fontWeight: "bold", color: "black" }}>
                {selectedLocation.lng.toFixed(6)}
              </Box>
            </Typography>
          )}
        </DialogContent>

        <DialogActions sx={{ p: 3 }}>
          <Button
            onClick={() => setIsMapOpen(false)}
            sx={{ ...gradientButtonStyle, color: "white" }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              console.log("Location confirmed:", selectedLocation);
              setIsMapOpen(false);
            }}
            sx={gradientButtonStyle}
          >
            Confirm Location
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
