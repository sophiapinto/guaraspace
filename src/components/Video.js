import React from 'react';

const Video = ({ videoId, title = 'ASSISTA AO NOSSO VÍDEO INSTITUCIONAL' }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    
    <div
      style={{
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        paddingTop: '40px',
        paddingLeft: '20px',
        paddingRight: '20px',
      }}
    >
      <h2 style={{ marginBottom: '20px', fontSize: '18px', letterSpacing: '1px', color: '#333', fontFamily: 'opensans-bold, sans serif' }}>
        {title}
      </h2>

      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '560px',
          height: '315px',
          margin: '0 auto',
        }}
      >
        <iframe
          src={embedUrl}
          width="560"
          height="315"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '10px',
          }}
        />
      </div>
    </div>
  );
};

export default Video;