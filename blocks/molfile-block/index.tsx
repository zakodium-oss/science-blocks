import { FileBlockProps, getLanguageFromFilename } from "@githubnext/blocks";
import { Button, Box } from "@primer/react";
import { Molecule } from 'openchemlib/minimal'

export default function MolfileBlock(props: FileBlockProps) {
  const { content } = props;
  console.log(props);
  
  const mol = Molecule.fromMolfile(content);
  const svg = mol.toSVG(800, 600);

  return (
    <div dangerouslySetInnerHTML={{ __html: svg }} />
  );
}