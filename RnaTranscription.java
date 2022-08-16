class RnaTranscription {
    char conversion(char c){
        switch(c){
            case 'G': return 'C';
            case 'C': return 'G';
            case 'T': return 'A';
            case 'A': return 'U';
        }
        return ' ';
    }

    String transcribe(String dnaStrand) {
        StringBuilder RNA = new StringBuilder();
        for(char c: dnaStrand.toCharArray()){
            RNA.append(conversion(c));
        }
        return RNA.toString();
    }

}
