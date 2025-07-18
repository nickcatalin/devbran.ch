import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'DevBran.ch - Professional Link Management for Developers';
export const size = {
    width: 1200,
    height: 630,
};

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 128,
                    background: 'linear-gradient(to bottom, #FFFFFF, #E7EBC5)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 48,
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 48,
                    }}
                >
                    <svg
                        width="120"
                        height="120"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M16 2C8.268 2 2 8.268 2 16C2 23.732 8.268 30 16 30C23.732 30 30 23.732 30 16C30 8.268 23.732 2 16 2Z"
                            stroke="#565264"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M16 8V24"
                            stroke="#565264"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M10 14L16 8L22 14"
                            stroke="#565264"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <div
                        style={{
                            marginLeft: 24,
                            fontSize: 72,
                            fontWeight: 'bold',
                            background: 'linear-gradient(to right, #565264, #56876D)',
                            backgroundClip: 'text',
                            color: 'transparent',
                        }}
                    >
                        DevBran.ch
                    </div>
                </div>
                <div
                    style={{
                        fontSize: 36,
                        color: '#0C0C0C',
                        textAlign: 'center',
                        maxWidth: '80%',
                    }}
                >
                    Professional Link Management for Developers
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}