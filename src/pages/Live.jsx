import React, { useState, useEffect } from 'react';
import { Room, RoomEvent } from 'livekit-client';

const LivePage = () => {
    const [room, setRoom] = useState(null);
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        const connectToRoom = async () => {
            const response = await fetch('/api/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ room_name: 'my-room', identity: 'user-' + Math.random() }),
            });
            const data = await response.json();

            const room = new Room();
            await room.connect('ws://localhost:7880', data.token);

            setRoom(room);
            setParticipants(Array.from(room.participants.values()));

            room.on(RoomEvent.ParticipantConnected, (participant) => {
                setParticipants((prev) => [...prev, participant]);
            });

            room.on(RoomEvent.ParticipantDisconnected, (participant) => {
                setParticipants((prev) => prev.filter((p) => p.sid !== participant.sid));
            });
        };

        connectToRoom();

        return () => {
            if (room) {
                room.disconnect();
            }
        };
    }, []);

    return (
        <div>
            <h1>Live Stream</h1>
            <div id="video-grid">
                {participants.map((participant) => (
                    <div key={participant.sid}>
                        <p>{participant.identity}</p>
                        {/* Video and audio elements will be attached here */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LivePage;


