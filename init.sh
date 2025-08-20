#!/bin/bash
echo "🔑 Login no Firebase..."
firebase login

echo "⚙️ Iniciando configuração..."
firebase init hosting

echo "⬆️ Subindo regras Firestore..."
firebase deploy --only firestore:rules

echo "🚀 Deploy do site..."
firebase deploy --only hosting
