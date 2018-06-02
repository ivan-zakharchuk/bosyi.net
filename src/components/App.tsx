import React from "react";

interface AppProps {
	message: string;
}

export default function ({ message } : AppProps) {
	return <h1>Volodymyr {message}</h1>;
}